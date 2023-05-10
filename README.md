# Todo Rest API

Todo Rest API using Express and [Prisma](https://prosma.io). The API is deployed on [Vercel](https://vercel.com)

## Database

- Postgresql
- [Supabase](https://supabase.com) (Data is stored here)

## API Endpoints

### /api/v1/auth

| Endpoint            | HTTP   | Description           | Body                 |
| ------------------- | ------ | --------------------- | -------------------- |
| `/api/todos`        | GET    | Get all Todos         |                      |
| `/api/todos`        | POST   | Create a Todo         | `title`, `completed` |
| `/api/todos/:id`    | PUT    | Update Todo Content   | `title`, `completed` |
| `/api/todos/:id`    | DELETE | Delete a Todo         |                      |
| `/api/todos/toggle` | PUT    | Update completed Todo |                      |
