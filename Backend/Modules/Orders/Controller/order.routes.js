const express = require("express");
const createOrder = require("../createOrder");
const authHandler = require("../../../Middleware/authHandler");
const getAllOrders = require("../getAllOrders");
const getSingleOrder = require("../getSingleOrder");
const allOrders = require("../adminGetAllOrders");
const authorizedRoles = require("../../../Middleware/authorizeRoles");
const updateOrderStatus = require("../adminUpdateOrder");

const orderRoutes = express.Router();

orderRoutes.use(authHandler);

orderRoutes.post("/", createOrder);
orderRoutes.get("/my-orders", getAllOrders);
orderRoutes.get("/:orderId", getSingleOrder);

orderRoutes.use(authorizedRoles("admin"));

orderRoutes.get("/admin/allOrders", allOrders);
orderRoutes.patch("/admin/orderUpdate/:orderId", updateOrderStatus);

module.exports = orderRoutes;
