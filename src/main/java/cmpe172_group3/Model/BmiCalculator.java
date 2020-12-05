package cmpe172_group3.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "bmi")
public class BmiCalculator {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private User user;
	
	public BmiCalculator(User currUser) {
		this.user = currUser;
	}
	
	public BmiCalculator get() {
		return this;
	}

	public float calculateBmi() {
		int userHeight = user.getHeight();
		int userWeight = user.getWeight();
		
		float bmi = (100 * 100* userWeight)/(userHeight^2);
		return bmi;
	}
}