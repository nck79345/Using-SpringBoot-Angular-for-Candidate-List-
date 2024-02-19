package com.java.SprintProject.Dao;

import com.java.SprintProject.entity.User;
import com.java.SprintProject.exception.UserNotFoundException;

public interface UserDao {

	public User findByUsername(String username) throws UserNotFoundException;
}
