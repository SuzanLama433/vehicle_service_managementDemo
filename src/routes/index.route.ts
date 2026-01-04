import express from "express";
import feedbackRoute from "../customer/routes/feedback.route";
import bookingRoute from "../customer/routes/booking.route";
import mechanicRoute from "../mechanic/routes/mechanic.route";

const apiRoutes = express.Router();

apiRoutes.use("/feedback", feedbackRoute);
apiRoutes.use("/booking", bookingRoute);
apiRoutes.use("/mechanic", mechanicRoute);

export default apiRoutes;
