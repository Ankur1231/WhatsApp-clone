import express from "express";
import User from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ googleId: req.body.googleId });

    if (existingUser) {
      res.status(200).json("user aready exist");
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("user saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
  console.log(req.body);
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
