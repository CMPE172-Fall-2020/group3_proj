package cmpe172_group3.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import cmpe172_group3.Model.User;
import cmpe172_group3.Repositories.RestUserRepo;

@RestController
public class UserController {
    private RestUserRepo repository;
    private User user;

    public UserController(RestUserRepo repository, User currUser) {
        this.repository = repository;
        this.user = currUser;
    }

    @GetMapping("/user")
    public User get(@PathVariable int id) {
    	return user.get();
    }
}
