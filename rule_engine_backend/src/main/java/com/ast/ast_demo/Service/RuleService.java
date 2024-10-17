package com.ast.ast_demo.Service;

import com.ast.ast_demo.Model.Node;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Stack;

@Service
public class RuleService {

    // Create an AST from the rule string
    public Node createRule(String ruleString) {
        String[] tokens = ruleString.split(" ");
        return parseExpression(tokens);
    }

    // Helper function to parse tokens into an AST
    private Node parseExpression(String[] tokens) {
        Stack<Node> stack = new Stack<>();

        for (String token : tokens) {
            if (token.equals("AND") || token.equals("OR")) {
                Node right = stack.pop();
                Node left = stack.pop();
                stack.push(new Node("operator", token, left, right));
            } else {
                stack.push(new Node("operand", token, null, null));
            }
        }
        return stack.pop();
    }

    // Evaluate the AST against user-provided data
    public boolean evaluateRule(Node root, Map<String, Object> data) {
        if (root == null) return false;

        if (root.getType().equals("operand")) {
            return evaluateCondition(root.getValue(), data);
        }

        boolean leftResult = evaluateRule(root.getLeft(), data);
        boolean rightResult = evaluateRule(root.getRight(), data);

        return root.getValue().equals("AND") ? (leftResult && rightResult) : (leftResult || rightResult);
    }

    // Helper function to evaluate a condition
    private boolean evaluateCondition(String condition, Map<String, Object> data) {
        String[] parts = condition.split(" ");
        String attribute = parts[0];
        String operator = parts[1];
        int value = Integer.parseInt(parts[2]);

        int attributeValue = (int) data.get(attribute);

        switch (operator) {
            case ">": return attributeValue > value;
            case "<": return attributeValue < value;
            case "=": return attributeValue == value;
            default: throw new IllegalArgumentException("Invalid operator");
        }
    }
}
