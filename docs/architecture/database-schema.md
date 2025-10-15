# Database Schema

PostgreSQL schema design for the AI Discovery Wizard, optimized for Supabase.

## SQL Schema Definition

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Sessions table
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '7 days'),
    current_step VARCHAR(50) NOT NULL DEFAULT 'landing',
    answers JSONB DEFAULT '{}',
    selected_automations TEXT[] DEFAULT ARRAY[]::TEXT[],
    pricing_data JSONB,
    device_type VARCHAR(20) NOT NULL,
    user_agent TEXT,
    ip_address INET,
    status VARCHAR(20) NOT NULL DEFAULT 'active',

    CONSTRAINT valid_device_type CHECK (device_type IN ('mobile', 'tablet', 'desktop')),
    CONSTRAINT valid_status CHECK (status IN ('active', 'completed', 'abandoned'))
);

-- Automations table
CREATE TABLE automations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    industry TEXT[] NOT NULL,
    category VARCHAR(50) NOT NULL,
    estimated_time_savings INTEGER NOT NULL,
    token_estimate INTEGER NOT NULL,
    complexity VARCHAR(20) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    icon VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT valid_complexity CHECK (complexity IN ('Low', 'Medium', 'High')),
    CONSTRAINT positive_time_savings CHECK (estimated_time_savings > 0),
    CONSTRAINT positive_tokens CHECK (token_estimate > 0)
);

-- Discovery documents table
CREATE TABLE discovery_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
    email VARCHAR(255),
    industry VARCHAR(50) NOT NULL,
    team_size VARCHAR(20) NOT NULL,
    pain_points TEXT[] NOT NULL,
    volume_metrics JSONB NOT NULL DEFAULT '{}',
    suggested_automations JSONB NOT NULL DEFAULT '[]',
    final_automations TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    pricing_data JSONB NOT NULL,
    time_savings_data JSONB NOT NULL,
    ai_insights TEXT[] DEFAULT ARRAY[]::TEXT[],
    lead_quality_score INTEGER DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    pdf_url TEXT,
    booking_id VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,

    CONSTRAINT valid_doc_status CHECK (status IN ('draft', 'completed', 'emailed', 'booked', 'contacted')),
    CONSTRAINT valid_lead_score CHECK (lead_quality_score BETWEEN 0 AND 100),
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR email IS NULL)
);

-- Indexes for performance
CREATE INDEX idx_sessions_status ON sessions(status);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);
CREATE INDEX idx_sessions_created_at ON sessions(created_at DESC);

CREATE INDEX idx_automations_industry ON automations USING GIN(industry);
CREATE INDEX idx_automations_category ON automations(category);
CREATE INDEX idx_automations_is_active ON automations(is_active) WHERE is_active = TRUE;

CREATE INDEX idx_discovery_docs_session_id ON discovery_documents(session_id);
CREATE INDEX idx_discovery_docs_status ON discovery_documents(status);
CREATE INDEX idx_discovery_docs_created_at ON discovery_documents(created_at DESC);
CREATE INDEX idx_discovery_docs_lead_score ON discovery_documents(lead_quality_score DESC);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_sessions_updated_at BEFORE UPDATE ON sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_automations_updated_at BEFORE UPDATE ON automations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---
