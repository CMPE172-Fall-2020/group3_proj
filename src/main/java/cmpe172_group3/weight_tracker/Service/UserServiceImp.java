package cmpe172_group3.weight_tracker.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cmpe172_group3.weight_tracker.DAO.UserDAO;
import cmpe172_group3.weight_tracker.Model.User;

@Service
public class UserServiceImp implements UserService {
 
	 @Autowired
	 private UserDAO userDAO;
	 
	 @Transactional
	 @Override
	 public List<User> get() {
	  return userDAO.get();
	 }
	 
	 @Transactional
	 @Override
	 public User get(int id) {
	  return userDAO.get(id);
	 }
	 
	 @Transactional
	 @Override
	 public void save(User user) {
	  userDAO.save(user);
	  
	 }
	 
	 @Transactional
	 @Override
	 public void delete(int id) {
	  userDAO.delete(id);
	 }
}

