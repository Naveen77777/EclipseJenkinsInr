package stepDefination;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Smoketest {
	
	   WebDriver driver;
	   
	
	 @Given("^Open Firefox and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		driver = new FirefoxDriver();
		   /*System.setProperty("webdriver.chrome.driver", "D:\\Selenium 1234\\chromedriver.exe");
		    /*ChromeOptions options = new ChromeOptions();
	        options.addArguments("start-maximized");
	        options.addArguments("disable-infobars");
	        options.addArguments("--disable-extensions"); */
	        driver.manage().window().maximize();
		    driver.navigate().to("https://myworld.kpit.com");
		    Thread.sleep(2000);
	}

	@When("^Enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void enter_valid_mailid_and_valid_password(String Uname, String Password) throws Throwable {
	    
	    driver.findElement(By.name("UserName")).sendKeys(Uname);
	    driver.findElement(By.name("Password")).sendKeys(Password);
	    Thread.sleep(4000);    		
	}

	@Then("^User should able to login successfully and navigated to Home page$")
	public void user_should_able_to_login_successfully_and_navigated_to_Home_page() throws Throwable {
	  driver.findElement(By.className("submit")).click(); 
	  Thread.sleep(4000);
	  driver.findElement(By.xpath("//a[@href='#/dashboard']")).click();
	  Thread.sleep(3000);
	}
	
	@Then("^User Clicked on Timelog button and Enter the Timelog for the Tue and Thu days for Hrs$")
	public void user_Clicked_on_Timelog_button_and_Enter_the_Timelog_for_the_Tue_and_Thu_days_for_Hrs() throws Throwable {
		  driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		  String parentWindowHandle = driver.getWindowHandle();
		  driver.findElement(By.xpath("//span[contains(@class,'text-center ng-binding')][contains(text(),'Timelog')]")).click();
		  //String parentWindowHandle = driver.getWindowHandle();
		  Thread.sleep(5000); 
	  	 			        
	       Set<String> windowHandles = driver.getWindowHandles();
	       System.out.println(windowHandles.size());
	        Iterator<String> it = windowHandles.iterator();
	        String wHandle = null;
	        while (it.hasNext()) {
	        wHandle = it.next();
	       driver.switchTo().window(wHandle);
	      if (driver.getCurrentUrl().equals("https://asapfe.kpit.com/sap/bc/ui5_ui5/sap/ztimedesktop/index.html")) {
	      {
	    	   Select proj = new Select(driver.findElement(By.cssSelector("__item12-idhomeToView1--myTable-0_cell0")));
	    		 proj.selectByValue("E.0010104.1");
	    		 Thread.sleep(2000);
	    		 Select roleId = new Select(driver.findElement(By.xpath(".//*[@id='idhomeToView1--idselectProject11-idhomeToView1--myTable-0-inner']")));
	    		 roleId.selectByValue("1850027 "); 
	    		 Thread.sleep(2000); 
	    		 Select activity = new Select(driver.findElement(By.xpath(".//*[@id='idhomeToView1--idselectProject2-idhomeToView1--myTable-0-inner']")));
	    		 activity.selectByValue("QUALITY ASSURANCE"); 
	    		 Thread.sleep(2000);
	    		 Select subActivity = new Select(driver.findElement(By.xpath(".//*[@id='idhomeToView1--idselectProject3-idhomeToView1--myTable-0-inner']")));
	    		 subActivity.selectByValue("FUNCTION TESTING"); 
	    		 Thread.sleep(2000);
	    		 
	          //driver.findElement(By.xpath("//input[@id='idhomeToView1--ip2-idhomeToView1--myTable-0-inner']")).sendKeys("9");
	          driver.findElement(By.xpath("//input[@id='idhomeToView1--ip4-idhomeToView1--myTable-0-inner']")).sendKeys("9");
	          driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	          
	          driver.findElement(By.xpath("//span[contains(@class,'sapMBtnContent')][contains(text(),'SUBMIT')]")).click();
	          
	      }
	      driver.close(); 
	      }
	      driver.switchTo().window(parentWindowHandle);
	      
	      //driver.findElement(By.xpath("//span[contains(@class,'text-center ng-binding')][contains(text(),'Attendance')]")).click();
		  Thread.sleep(3000);
		 // driver.findElement(By.xpath("//md-icon[@class='mt-2 mr-10 ng-scope md-default-theme']")).click();
	      
	  }  
	}  
			 
	  @Then("^User clicked on KPMS link and User nagivated to KPMS website$")
	  public void user_clicked_on_KPMS_link_and_User_nagivated_to_KPMS_website() throws Throwable {
		  driver.findElement(By.xpath("//span[contains(@class,'text-center ng-binding')][contains(text(),'Attendance')]")).click();
		  Thread.sleep(3000);
		  driver.findElement(By.xpath("//md-icon[@class='mt-2 mr-10 ng-scope md-default-theme']")).click();
		  
		  /*  driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		  //String parentWindowHandle = driver.getWindowHandle();
		  driver.findElement(By.xpath("//span[contains(@class,'text-center ng-binding')][contains(text(),'KPMS')]")).click();
		  //String parentWindowHandle = driver.getWindowHandle();
		  	  	 			        
	        Set<String> windowHandles1 = driver.getWindowHandles();
	        System.out.println(windowHandles1.size());
	        Iterator<String> abc = windowHandles1.iterator();
	        String wHandle1 = null;
	       while (it.hasNext()) {
	        wHandle1 = it.next();
	        driver.switchTo().window(wHandle1);
	        if (driver.getCurrentUrl().equals("https://naveenm2:mnk_77788/kpms.kpit.com/Pages/HomePage.aspx")) {
	          {
	          driver.findElement(By.id("ctl00_SPWebPartManager1_g_6354c54c_45e0_48c0_a12a_75ed86b3446d_ctl00_gvMyAppraisal_ctl02_lnkView")).click();
	          driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	          driver.findElement(By.xpath("//input[@id='ctl00_SPWebPartManager1_g_1a82dc83_7835_4c0e_aab3_3bd74b575d76_ctl00_btnClose']")).click();
	            
	            
	      }
	      driver.close(); 
	          
	         
	  } 
	        
	         
	  }
	      driver.switchTo().window(parentWindowHandle);
	             
	       } */
	       
	
	  }
  }
	
