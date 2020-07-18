import express from 'express';
import useMiddleware from './middleware/index.js';
import errorHandlers from './middleware/error-handlers.js';
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import courseRouter from './routes/course.js';

const app = express();

useMiddleware(app);


// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/api", indexRouter);
app.use("/auth", authRouter);
app.use("/course", courseRouter);


// Обработка несуществующих запросов
errorHandlers(app);


export default app;
