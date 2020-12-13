package com.anchal.restfulwebservices.services;

import com.anchal.restfulwebservices.entities.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class HardCodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static Long idCounter = 0l;

    static {
        todos.add(new Todo(++idCounter, "Avinash", "Learn java", new Date(), false));
        todos.add(new Todo(++idCounter, "Anchal", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "Avijeet", "Learn Spring", new Date(), false));
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);
            todos.add(todo);
        }
        else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo findById(Long id){
        for(Todo todo: todos){
            if(todo.getId() == id)
                return todo;
        }
        return null;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo != null){
            try{
                todos.remove(todo);
                return todo;
            }catch (Exception e){
                System.out.println(e);
                return null;
            }
        }
        return null;
    }
}
