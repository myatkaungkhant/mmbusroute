package com.mmbusroute.mbus.model;

import lombok.Data;

@Data
public class Users {
    
    public String firstName;
    public String lastName;
    public String password;
    public String confirmPassword;
    public String email;
    public int phoneNo;
}
