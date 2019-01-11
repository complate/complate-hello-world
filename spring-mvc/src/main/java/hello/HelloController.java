package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Collection;

@Controller
public class HelloController {

    @GetMapping("/")
    public String hello(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("title", "This is from Spring");
		Collection<String> lines = new ArrayList<>();
		lines.add("This is a line");
		lines.add("that has a Java String history.");
		model.addAttribute("lines", lines);
        return "SiteIndex";
    }
}
