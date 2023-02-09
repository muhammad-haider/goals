const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

/**
  * @swagger
  *
  * /api/goals:
  *   get:
  *     description: Return all goals
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: Return all goals
  *         schema:
  *           type: object
*/
router.route("/").get(getGoals);

/**
  * @swagger
  *
  * /api/goals:
  *   post:
  *     description: Create goal
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: Return created goal
  *         schema:
  *           type: object
*/
router.route("/").post(setGoals);
router.route("/:id").put(updateGoals);
router.route("/:id").delete(deleteGoals);

module.exports = router;
