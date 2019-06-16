package userStepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import Utilities.randomDataGenerator;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestContactUsStepDefinition {

	public WebDriver driver;
	randomDataGenerator randomGenerator = new randomDataGenerator();
	WebElement firstName, lastName, email, telephoneNumber, websiteUrl, company;
	
	public TestContactUsStepDefinition() {
		driver = Hooks.driver;
	}
	// Navigate to contact us page and verify the page is loaded

	@Given("^I am on SecurePay Website$")
	public void iAmOnSecurePayWebsite() throws Throwable {
		driver.get("https://www.securepay.com.au");
	}

	@When("^I click on Contact Us link$")
	public void iClickOnContactUsLink() throws Throwable {
		// driver.get("https://www.securepay.com.au");
		Thread.sleep(3000);
		WebElement contactUsLink = driver.findElement(By.xpath("//*[@id=\"menu-item-126\"]/a"));
		contactUsLink.click();
		Thread.sleep(3000);
	}

	@Then("^Contact us page should be loaded$")
	public void contactUsPageShouldBeLoaded() throws Throwable {
		String contactPageUrl = driver.getCurrentUrl();
		Assert.assertTrue((contactPageUrl.contains("contact-us")));
		System.out.println("The user is on the Contact Us page");
	}

	@And("^I fill in the contact us form with the random generated data$")
	public void iFillInTheContactUsFormWithTheRandomGeneratedData() throws Throwable {
		firstName = driver.findElement(By.name("first-name"));
		firstName.sendKeys(randomGenerator.getFirstName());
		lastName = driver.findElement(By.name("last-name"));
		lastName.sendKeys(randomGenerator.getLastName());
		email = driver.findElement(By.name("email-address"));
		email.sendKeys(randomGenerator.getEmail());
		telephoneNumber = driver.findElement(By.name("phone-number"));
		telephoneNumber.sendKeys(randomGenerator.getEmail());
		websiteUrl = driver.findElement(By.name("website-url"));
		websiteUrl.sendKeys(randomGenerator.getWebsiteUrl());
		company = driver.findElement(By.name("business-name"));
		company.sendKeys(randomGenerator.getCompanyName());
		Select reasonForEnquiry = new Select(driver.findElement(By.name("reason-for-enquiry")));
		reasonForEnquiry.selectByVisibleText("Support");
		Thread.sleep(3000);
	}
	
	@Then("^I should see the generated data$")
	public void iShouldSeeTheGeneratedData() throws Throwable {
		Assert.assertNotEquals(null, firstName.getAttribute("value"));
		Assert.assertNotEquals(null, lastName.getAttribute("value"));
		Assert.assertNotEquals(null, email.getAttribute("value"));
		Assert.assertNotEquals(null, telephoneNumber.getAttribute("value"));
		Assert.assertNotEquals(null, websiteUrl.getAttribute("value"));
		Assert.assertNotEquals(null, company.getText());
	}

}
