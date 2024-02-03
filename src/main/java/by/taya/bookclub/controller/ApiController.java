package by.taya.bookclub.controller;

import by.taya.bookclub.models.Member;
import by.taya.bookclub.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    // Example service injection
    @Autowired
    private MemberService memberService;

    @GetMapping("/members")
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    @PostMapping("/members")
    public Member addMember(@RequestBody Member member) {
        return memberService.save(member);
    }

    // Add more endpoints as needed
}
