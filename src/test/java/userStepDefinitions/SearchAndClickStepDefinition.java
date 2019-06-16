package userStepDefinitions;


import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchAndClickStepDefinition {

	public WebDriver driver;

	 public SearchAndClickStepDefinition() {
	 driver = Hooks.driver;
	 }


	// Search SecurePay on google and visit SecurePay website

	@Given("^I am on google serach engine page$")
	public void iAmOnGoogleSerachEnginePage() throws Throwable {
		String weburl = "https://www.google.com.au";
		driver.get(weburl);
	}

	@When("^I enter SecurePay in the search bar$")
	public void iEnterSecurePayInTheSearchBar() throws Throwable {
		WebElement searchSecurePay = driver.findElement(By.className("gLFyf"));
		searchSecurePay.sendKeys("SecurePay");
		WebElement googleSearch = driver.findElement(By.className("gNO89b"));
		googleSearch.submit();
	}

	@Then("^I should see SecurePay searches in the result$")
	public void iShouldSeeSecurePaySearchesInTheResult() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		String searchResult = driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div/div[2]/div/div[1]/input")).getAttribute("value");
		Assert.assertEquals("SecurePay", searchResult);
	}

	@And("^I click on SecurePay link from the search results$")
	public void iClickOnSecurePayLinkFromTheSearchResults() throws Throwable {
		WebElement clickSecurePayLink = driver.findElement(By.id("vn1s0p1c0"));
		clickSecurePayLink.click();

	}

	@Then("^I should navigate to SecurePay website$")
	public void iShouldNavigateToSecurePayWebsite() throws Throwable {
		String securePayWebsiteURL = driver.getCurrentUrl();
		Assert.assertTrue((securePayWebsiteURL.contains("https://www.securepay.com.au")));
	}	
}