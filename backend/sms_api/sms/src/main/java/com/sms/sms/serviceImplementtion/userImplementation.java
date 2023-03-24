package com.sms.sms.serviceImplementtion;

import com.sms.sms.entity.User;
import com.sms.sms.repository.UserRepository;
import com.sms.sms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userImplementation implements UserService {

     @Autowired
     UserRepository userRepository;

    public  void saveUser(User user){
       userRepository.save(user);
    }
}
