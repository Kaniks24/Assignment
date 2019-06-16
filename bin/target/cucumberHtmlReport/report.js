$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("incorrectEmailRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality with incorrect Email address",
  "description": "I want to verify the error messgae displayed when incorrect e mail address is enetered while registering",
  "id": "register-functionality-with-incorrect-email-address",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15371892726,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Background : I am on the home page"
    }
  ],
  "line": 6,
  "name": "Error messgae should be displayed when incorrect e mail address is enetered while registering",
  "description": "",
  "id": "register-functionality-with-incorrect-email-address;error-messgae-should-be-displayed-when-incorrect-e-mail-address-is-enetered-while-registering",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter incorrect email address and clicks on create an account",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_am_on_the_Sign_in_page()"
});
formatter.result({
  "duration": 5111755212,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_enter_incorrect_email_address_and_clicks_on_create_an_account()"
});
formatter.result({
  "duration": 197270727,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_should_see_an_error_message()"
});
formatter.result({
  "duration": 1307226769,
  "status": "passed"
});
formatter.after({
  "duration": 336172588,
  "status": "passed"
});
formatter.uri("megaMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Verify working of MegaMenu",
  "description": "I want to verify the working of MegaMenu (Dresses -\u003e Summer dresses)",
  "id": "verify-working-of-megamenu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7344289031,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Background : I am on the home page"
    }
  ],
  "line": 6,
  "name": "Working of MegaMenu",
  "description": "",
  "id": "verify-working-of-megamenu;working-of-megamenu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover on Dresses on MegaMenu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Summer Dresses on sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see Summer Dresses page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_am_on_the_Sign_in_page()"
});
formatter.result({
  "duration": 155623029,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027Shubhams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c4d:72e0:4794:d7fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 58.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 3002, moz:profile: /var/folders/jq/3hqzdz350h3..., moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.2.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 5b7a4224-57c4-8d4a-9046-c78a9165c538\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:835)\n\tat userStepDefinitions.StepDefinition.I_am_on_the_Sign_in_page(StepDefinition.java:44)\n\tat ✽.Given I am on the Sign in page(megaMenu.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.I_hover_on_Dresses_on_MegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_click_on_Summer_Dresses_on_sub_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_should_see_Summer_Dresses_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 89722835,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027Shubhams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c4d:72e0:4794:d7fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 58.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 3002, moz:profile: /var/folders/jq/3hqzdz350h3..., moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.2.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 5b7a4224-57c4-8d4a-9046-c78a9165c538\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:497)\n\tat userStepDefinitions.Hooks.embedScreenshot(Hooks.java:55)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.uri("productGrid.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of product grid arrangement based on Sort By price.",
  "description": "I want to verify the arrangement of product grid after clicking on Sort By: Price on the Summer Dresses page",
  "id": "validation-of-product-grid-arrangement-based-on-sort-by-price.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7470810357,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027Shubhams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c4d:72e0:4794:d7fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:        0x105b06c94 - backtrace::backtrace::trace::hc44b8b6afeb219e7\n   1:        0x105b0706f - backtrace::capture::Backtrace::new::he142908a5a8f9eda\n   2:        0x1057974bf - webdriver::error::WebDriverError::new::hebec477f9df08343\n   3:        0x1057b1a2d - geckodriver::marionette::MarionetteConnection::connect::h7c5f83408cb30b4b\n   4:        0x1057a0b05 - geckodriver::marionette::MarionetteHandler::create_connection::he8ee0c52c2a1b9c4\n   5:        0x1057a3031 - _$LT$geckodriver..marionette..MarionetteHandler$u20$as$u20$webdriver..server..WebDriverHandler$LT$geckodriver..marionette..GeckoExtensionRoute$GT$$GT$::handle_command::h2cefa41166ba9494\n   6:        0x10572c303 - _$LT$webdriver..server..Dispatcher$LT$T$C$$u20$U$GT$$GT$::run::h77fa1167834370c3\n   7:        0x1057980da - webdriver::server::start::_$u7b$$u7b$closure$u7d$$u7d$::hffbd004b475f3665\n   8:        0x10569022a - std::sys_common::backtrace::__rust_begin_short_backtrace::hec0d8ff74429f694\n   9:        0x1056a12b3 - std::thread::Builder::spawn::_$u7b$$u7b$closure$u7d$$u7d$::_$u7b$$u7b$closure$u7d$$u7d$::h53c5ad07da085d9c\n  10:        0x10564f13a - _$LT$std..panic..AssertUnwindSafe$LT$F$GT$$u20$as$u20$core..ops..function..FnOnce$LT$$LP$$RP$$GT$$GT$::call_once::h83632791b6453edc\n  11:        0x1056a1fb9 - std::panicking::try::do_call::h86aca16d754ce830\n  12:        0x105e28bbc - __rust_maybe_catch_panic\n  13:        0x1056a1cac - std::panicking::try::hf8ca0c1321b41dad\n  14:        0x10569ec75 - std::panic::catch_unwind::hdf974745031c26a9\n  15:        0x1056a099e - std::thread::Builder::spawn::_$u7b$$u7b$closure$u7d$$u7d$::h34a325ccd27a7244\n  16:        0x10570eba3 - _$LT$F$u20$as$u20$alloc..boxed..FnBox$LT$A$GT$$GT$::call_box::h7e4138f98898fbeb\n  17:        0x105e24e2b - std::sys::imp::thread::Thread::new::thread_start::h0a04b176230f4d22\n  18:     0x7fff752956c0 - _pthread_body\n  19:     0x7fff7529556c - _pthread_start\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\n\tat userStepDefinitions.Hooks.openBrowser(Hooks.java:31)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Arrangement of product grid on Summer Dresses page",
  "description": "",
  "id": "validation-of-product-grid-arrangement-based-on-sort-by-price.;arrangement-of-product-grid-on-summer-dresses-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Summer Dresses page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sort By Price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the product grid is arranged properly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_am_on_Summer_Dresses_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_click_on_Sort_By_Price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_should_see_the_product_grid_is_arranged_properly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 755497,
  "status": "passed"
});
formatter.uri("validEmailRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality with a valid email address",
  "description": "As a user, I want to register with a valid email address",
  "id": "register-functionality-with-a-valid-email-address",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7089263321,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027Shubhams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c4d:72e0:4794:d7fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:        0x103bc0c94 - backtrace::backtrace::trace::hc44b8b6afeb219e7\n   1:        0x103bc106f - backtrace::capture::Backtrace::new::he142908a5a8f9eda\n   2:        0x1038514bf - webdriver::error::WebDriverError::new::hebec477f9df08343\n   3:        0x10386ba2d - geckodriver::marionette::MarionetteConnection::connect::h7c5f83408cb30b4b\n   4:        0x10385ab05 - geckodriver::marionette::MarionetteHandler::create_connection::he8ee0c52c2a1b9c4\n   5:        0x10385d031 - _$LT$geckodriver..marionette..MarionetteHandler$u20$as$u20$webdriver..server..WebDriverHandler$LT$geckodriver..marionette..GeckoExtensionRoute$GT$$GT$::handle_command::h2cefa41166ba9494\n   6:        0x1037e6303 - _$LT$webdriver..server..Dispatcher$LT$T$C$$u20$U$GT$$GT$::run::h77fa1167834370c3\n   7:        0x1038520da - webdriver::server::start::_$u7b$$u7b$closure$u7d$$u7d$::hffbd004b475f3665\n   8:        0x10374a22a - std::sys_common::backtrace::__rust_begin_short_backtrace::hec0d8ff74429f694\n   9:        0x10375b2b3 - std::thread::Builder::spawn::_$u7b$$u7b$closure$u7d$$u7d$::_$u7b$$u7b$closure$u7d$$u7d$::h53c5ad07da085d9c\n  10:        0x10370913a - _$LT$std..panic..AssertUnwindSafe$LT$F$GT$$u20$as$u20$core..ops..function..FnOnce$LT$$LP$$RP$$GT$$GT$::call_once::h83632791b6453edc\n  11:        0x10375bfb9 - std::panicking::try::do_call::h86aca16d754ce830\n  12:        0x103ee2bbc - __rust_maybe_catch_panic\n  13:        0x10375bcac - std::panicking::try::hf8ca0c1321b41dad\n  14:        0x103758c75 - std::panic::catch_unwind::hdf974745031c26a9\n  15:        0x10375a99e - std::thread::Builder::spawn::_$u7b$$u7b$closure$u7d$$u7d$::h34a325ccd27a7244\n  16:        0x1037c8ba3 - _$LT$F$u20$as$u20$alloc..boxed..FnBox$LT$A$GT$$GT$::call_box::h7e4138f98898fbeb\n  17:        0x103edee2b - std::sys::imp::thread::Thread::new::thread_start::h0a04b176230f4d22\n  18:     0x7fff752956c0 - _pthread_body\n  19:     0x7fff7529556c - _pthread_start\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\n\tat userStepDefinitions.Hooks.openBrowser(Hooks.java:31)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Background : I am on the home page and navigate to the sign in page"
    }
  ],
  "line": 6,
  "name": "I should be able to register with a valid email address",
  "description": "",
  "id": "register-functionality-with-a-valid-email-address;i-should-be-able-to-register-with-a-valid-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in valid Email address and click on create an account",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill in personal information on create Account page and click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_am_on_the_Sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_fill_in_valid_Email_address_and_click_on_create_an_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_fill_in_personal_information_on_create_Account_page_and_click_on_Register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_should_see_My_Account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 571290,
  "status": "passed"
});
});