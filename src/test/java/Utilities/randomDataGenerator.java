package Utilities;

import io.codearte.jfairy.Fairy;
import io.codearte.jfairy.producer.person.Person;

public class randomDataGenerator {
	Fairy fairy = Fairy.create();

	//Create person object
	Person person = fairy.person();

	public String getFirstName(){
		return person.getFirstName();
	}
	
	public String getLastName(){
		return person.getLastName();
	}
	
	public String getEmail(){
		return person.getEmail();
	}
	
	public String getTelephoneNumber(){
		return person.getTelephoneNumber();
	}
	
	public String getWebsiteUrl() {
		return fairy.company().getUrl();
	}
	
	public String getCompanyName() {
		return person.getCompany().toString();	
	}
}


