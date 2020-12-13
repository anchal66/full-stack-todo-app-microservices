package com.anchal.restfulwebservices.controllers;

import com.anchal.restfulwebservices.entities.Todo;
import com.anchal.restfulwebservices.services.HardCodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TodoController {

    @Autowired
    private HardCodedService hardCodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username){
        return hardCodedService.findAll() ;
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Long id){
        return hardCodedService.findById(id) ;
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id){
        Todo todo = hardCodedService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable Long id, @RequestBody Todo todo){
        Todo todoReturned = hardCodedService.save(todo);
        return new ResponseEntity<>(todoReturned, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> newTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setId(0l);
        Todo createdTodo = hardCodedService.save(todo);

//        send the new url in header
        URI uri =ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
//        return new ResponseEntity<>(HttpStatus.OK);
    }

}
