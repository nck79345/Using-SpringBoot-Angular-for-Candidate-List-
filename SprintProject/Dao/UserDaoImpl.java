package com.java.SprintProject.Dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.java.SprintProject.entity.User;
import com.java.SprintProject.exception.UserNotFoundException;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{

	@Autowired
	private SessionFactory sessionFactory;
	private boolean flag;
	
@Override
public User findByUsername(String username) throws UserNotFoundException {
	String hql="From User where username=:user";
	Query query=sessionFactory.openSession().createQuery(hql);
	query.setParameter("user", username);
	List<User> userList = query.list();
	if(userList.size()>=1) {
		return userList.get(0);
	}
	else {
		throw new UserNotFoundException("User Not Found");
	}
}
}