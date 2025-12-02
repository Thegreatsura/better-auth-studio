# Tests

This directory contains unit tests for Better Auth Studio.

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Test Structure

- `config.test.ts` - Tests for configuration loading and validation
  - Finding auth config files
  - Loading config from different paths
  - Handling invalid config files
  - Config with social providers

- `studio.test.ts` - Tests for studio server functionality
  - Starting studio server
  - Watch mode functionality
  - WebSocket connections
  - Server lifecycle

- `cli.test.ts` - Tests for CLI functionality
  - Finding config paths
  - Path normalization
  - File display info
  - Config file detection

- `routes.test.ts` - Tests for API route handlers
  - Health check endpoint
  - Config endpoint
  - Database schema endpoint
  - Users and organizations endpoints
  - CORS handling
  - Error handling

## Writing Tests

Tests are written using Vitest. Follow these guidelines:

1. Use descriptive test names
2. Group related tests with `describe` blocks
3. Use `it` or `test` for individual test cases
4. Keep tests isolated and independent
5. Mock external dependencies when necessary
6. Clean up resources in `afterEach` hooks

