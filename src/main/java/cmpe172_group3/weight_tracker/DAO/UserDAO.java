package cmpe172_group3.weight_tracker.DAO;

import java.util.List;

import cmpe172_group3.weight_tracker.Model.User;

public interface UserDAO {
	 
	 List<User> get();
	 
	 User get(int id);
	 
	 void save(User user);
	 
	 void delete(int id);
	}

