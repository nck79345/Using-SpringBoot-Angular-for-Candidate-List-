package com.java.SprintProject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.java.SprintProject.entity.Candidate;
import com.java.SprintProject.service.AuthenticationService;

@SpringBootApplication
public class SprintProjectApplication implements CommandLineRunner{
	@Autowired
    private AuthenticationService authenticationService;

	public static void main(String[] args) {
		SpringApplication.run(SprintProjectApplication.class, args);
		
	}
	 @Override
	    public void run(String...a) {
	        for (int i = 0; i <= 10; i++) {
	            Candidate candidate = new Candidate();
	            candidate.getRecId();
	            candidate.getCandidateNo();
	            candidate.setCandidateName("candidateName");	            
	            candidate.setRank(01);
	            candidate.setScore(80);
	            candidate.getUpdateDate();
	            
	        }
	    }
	 
	 

}
