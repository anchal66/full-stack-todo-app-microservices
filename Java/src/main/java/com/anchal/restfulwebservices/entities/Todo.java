package com.anchal.restfulwebservices.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private Long id;

    private String username;

    private String description;

    private Date targetDate;

    private boolean isDone;
}
