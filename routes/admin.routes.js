import express from "express";
import {
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controllers/admin.controller.js";
import auth from "../middleware/auth.js";
const adminRounter = express.Router();

adminRounter.post("/login", adminLogin);
adminRounter.get("/comments", auth, getAllComments);
adminRounter.get("/blogs", auth, getAllBlogsAdmin);
adminRounter.post("/delete-comment", auth, deleteCommentById);
adminRounter.post("/approve-comment", auth, approveCommentById);
adminRounter.get("/dashboard", auth, getDashboard);

export default adminRounter;
