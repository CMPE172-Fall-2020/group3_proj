package cmpe172_group3.weight_tracker.Service;

import java.util.List;

import cmpe172_group3.weight_tracker.Model.User;

public interface UserService {
	 List<User> get();
	 
	 User get(int id);
	 
	 void save(User user);
	 
	 void delete(int id);
}

