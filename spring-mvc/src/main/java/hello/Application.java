package hello;

import com.github.complate.ComplateViewResolver;
import com.github.complate.NashornScriptingBridge;
import com.github.complate.ScriptingEngine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import org.springframework.web.servlet.ViewResolver;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

	/**
	 * Provide the complate view resolver, which is integrated
	 * via the Nashorn scripting engine.
	 */
	@Bean
	public ViewResolver complateViewResolver(ResourceLoader resourceLoader) {
		String bundlePath = "classpath:/templates/complate/views.js";
		Resource bundle = resourceLoader.getResource(bundlePath);

		ScriptingEngine scriptingEngine = new NashornScriptingBridge();
		return new ComplateViewResolver(scriptingEngine, bundle);
	}
}
