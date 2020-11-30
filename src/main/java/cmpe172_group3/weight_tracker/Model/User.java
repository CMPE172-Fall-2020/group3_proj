package cmpe172_group3.weight_tracker.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "userinfo")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	private int age;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private float weight;
	
	@Column
	private float height;
	
	@Column
	private float bmi;
	
	@Column
	private String category;
	
	public User get() {
		return this;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return this.firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return this.lastName;
	}

	public void LastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public float getWeight() {
		return this.weight;
	}
	
	public void setWeight(float weight) {
		this.weight = weight;
	}
	
	public float getHeight() {
		return this.height;
	}
	
	public void setHeight(float height) {
		this.height = height;
	}
	
	public float getBmi() {
		return this.bmi;
	}
	
	public void calculateBmi(float height, float weight) {
		this.bmi = (100 * 100 * weight)/( height * height);
	}
	
	public String getCategory() {
		return this.category;
	}
	
	public void setCategory(float bmi) {
		if (bmi < 18.5) {
			this.category = "underweight";
		}
		
		else if (bmi >= 18.5 && bmi <= 24.9) {
			this.category = "normal";
		}
		
		else if (bmi >= 25 && bmi <= 29.9) {
			this.category = "overweight";
		}
		
		else {
			this.category = "obese";
		}
	}
 	
}
