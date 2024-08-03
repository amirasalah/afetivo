import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello, World!'));
// Example API route
app.get('/api/hello', (c) => c.json({ message: 'Hello from the API' }));

serve( {
    fetch: app.fetch.bind(app),
    port: 4000
})