package com.ast.ast_demo.Controller;

import com.ast.ast_demo.Model.Node;
import com.ast.ast_demo.Service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/rules")
@CrossOrigin(origins = "http://localhost:3000")
public class RuleController {

    @Autowired
    private RuleService ruleService;

    // Endpoint to create a rule
    @PostMapping("/create-rule")
    public ResponseEntity<Node> createRule(@RequestBody String ruleString) {
        Node ast = ruleService.createRule(ruleString);
        return ResponseEntity.ok(ast);
    }

    @PostMapping("/evaluate-rule")
public ResponseEntity<Boolean> evaluateRule(@RequestBody Map<String, Object> data,
                                                @RequestParam String ruleString){
    System.out.println("Data received: " + data);
    System.out.println("Rule string: " + ruleString);

    try {
        Node ast = ruleService.createRule(ruleString);
        System.out.println("AST created: " + ast);
        
        boolean result = ruleService.evaluateRule(ast, data);
        return ResponseEntity.ok(result);
    } catch (Exception e) {
        e.printStackTrace(); // This will print the error to the server console
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
    }
}


}
