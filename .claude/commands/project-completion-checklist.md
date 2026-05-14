# Todo App - Project Completion Checklist

## Frontend (Next.js)

### Pages & Routes
- [ ] Landing page (`app/page.tsx`) - working and styled
- [ ] Login page (`app/login/page.tsx`) - functional form
- [ ] Register page (`app/register/page.tsx`) - functional form
- [ ] Todos page (`app/todos/page.tsx`) - authenticated, displays list
- [ ] 404/error pages - graceful error handling

### Components
- [ ] AuthProvider - manages user state and auth context
- [ ] Navbar - navigation and theme toggle
- [ ] ProtectedRoute - guards authenticated pages
- [ ] TodoForm - add/edit todos
- [ ] TodoList - displays filtered todos
- [ ] TodoItem - individual todo with actions
- [ ] TodoFilters - filter by status (all/active/completed)
- [ ] Spinner - loading states
- [ ] LoginForm - login UI
- [ ] RegisterForm - registration UI

### Features
- [ ] User registration works
- [ ] User login works
- [ ] JWT token storage and refresh
- [ ] Create new todo
- [ ] View todos list
- [ ] Mark todo complete/incomplete
- [ ] Edit todo
- [ ] Delete todo
- [ ] Filter todos (all, active, completed)
- [ ] Pagination support
- [ ] Dark/light theme toggle
- [ ] Logout functionality
- [ ] Session persistence

### Quality
- [ ] TypeScript strict mode passes
- [ ] ESLint configuration present and passing
- [ ] No console errors in development
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility basics (semantic HTML, ARIA labels)
- [ ] Environment variables configured (.env.local)

## Backend (Express + TypeScript)

### Setup
- [ ] Node.js server running on port 4000
- [ ] MongoDB connection working
- [ ] Environment variables configured (.env)
- [ ] TypeScript compilation successful

### Routes & Controllers
- [ ] Auth routes (`POST /auth/register`, `/auth/login`, `GET /auth/me`)
- [ ] Todo routes (`GET /todos`, `POST /todos`, `GET/PATCH/DELETE /todos/:id`)
- [ ] Error handling middleware
- [ ] Validation middleware
- [ ] Authentication middleware

### Features
- [ ] User registration with password hashing
- [ ] User login with JWT generation
- [ ] JWT verification on protected routes
- [ ] Create todos for authenticated users
- [ ] List todos with pagination
- [ ] Update todo (title, description, completed status)
- [ ] Delete todo
- [ ] Proper error responses
- [ ] Input validation

### Database
- [ ] MongoDB models for User and Todo
- [ ] Proper indexes on frequently queried fields
- [ ] Password hashing (bcrypt)
- [ ] JWT tokens with expiration

### Quality
- [ ] TypeScript strict mode passes
- [ ] No unused imports
- [ ] Proper error messages
- [ ] Request/response validation
- [ ] CORS configured

## Integration & Testing

- [ ] Frontend can register new user
- [ ] Frontend can login with registered user
- [ ] Frontend can create todos
- [ ] Frontend can view own todos
- [ ] Frontend can update todos
- [ ] Frontend can delete todos
- [ ] Logout clears token and redirects
- [ ] Invalid JWT is rejected
- [ ] Cross-origin requests work properly

## Deployment Readiness

- [ ] Environment variables documented
- [ ] Build scripts work (`npm run build`)
- [ ] Development servers start without errors (`npm run dev`)
- [ ] No hardcoded URLs or secrets
- [ ] Proper logging/error handling
- [ ] Database connection strings parameterized

## Documentation

- [ ] CLAUDE.md frontend documentation complete
- [ ] CLAUDE.md backend documentation complete
- [ ] API endpoints documented
- [ ] Environment setup documented
- [ ] Installation instructions in README

---

## Next Steps

1. Run `bash .claude/commands/setup.sh` to initialize project
2. Run `bash .claude/commands/dev.sh` to start development servers
3. Test all features manually
4. Fix any failing checklist items
5. Run `bash .claude/commands/build.sh` to verify production build
6. Run `bash .claude/commands/review.sh` to get project overview
