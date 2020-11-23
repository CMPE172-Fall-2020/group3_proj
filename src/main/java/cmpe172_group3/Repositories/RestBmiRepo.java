package cmpe172_group3.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import cmpe172_group3.Model.BmiCalculator;
import cmpe172_group3.Model.User;

@RepositoryRestResource
public interface RestBmiRepo extends CrudRepository<BmiCalculator, Float>{
}
