package com.java.SprintProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.java.SprintProject.Dao.UserDao;
import com.java.SprintProject.entity.User;
import com.java.SprintProject.exception.UserNotFoundException;
import com.java.SprintProject.repository.UserRepository;
import com.java.SprintProject.service.AuthenticationService;


@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class AuthenticationController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserDao dao;
	ResponseEntity<?> response;
//	@Autowired
//	private AuthenticationService authenticationService;
//	
//	
//	public String login(@RequestParam String username, @RequestParam String password) {
//		if(authenticationService.authenticate(username, password)) {
//			return "Login sucessful";
//		}
//		else {
//			return "Invalid creadentials";
//		}
//	}
	
	//create employee rest api
		@PostMapping("/login")
		public User createUser(@RequestBody User user) {
			return userRepository.save(user);
		}
		
		//get employee by emailId rest api
				@GetMapping("login/username/{username}")
				public ResponseEntity<?> getUserUsername(@PathVariable String username){
			       User userObj;
					
						try {
							userObj = dao.findByUsername(username);
						} catch (UserNotFoundException e) {
							return new ResponseEntity<String>("Failure",HttpStatus.BAD_REQUEST);		
						}
					
					return ResponseEntity.ok(userObj);
				}
}
