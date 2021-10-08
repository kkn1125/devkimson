---
title: "Contact"
permalink: "/contact.html"
---

<!-- <form action="https://formspree.io/{{site.email}}" method="POST">    

<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<input class="btn btn-success" type="submit" value="Send">
</form> -->

<div class="text-dark" style="background-color: var(--bs-gray-dark)">
    <p class="mb-4">{{site.name}}에게 메일을 발송합니다. 빠르게 회신 드리도록 하겠습니다!</p>
    <div class="form-group row">
        <div class="col-md-6">
            <div class="form-floating">
                <input type="email" name="email" class="form-control rounded-0" id="email" placeholder="name@example.com" required>
                <label for="email">이메일</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <select class="form-control rounded-0" name="type" id="type" aria-label="Floating label select example" required>
                    <option selected>선택해주세요</option>
                    <option value="1">질문</option>
                    <option value="2">제안</option>
                </select>
                <label for="type">메일 유형</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" name="name" class="form-control rounded-0" id="name" placeholder="홍길동" required>
                <label for="name">성함</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" name="phone" class="form-control rounded-0" id="phone" placeholder="01012345678">
                <label for="phone">연락처 (01012345678)</label>
            </div>
        </div>
    </div>
    <div class="form-floating">
        <textarea class="form-control rounded-0" placeholder="Leave a comment here" name="message" id="message" style="height: 10rem"></textarea>
    </div>
    <button id="sendMail" class="mt-3 btn btn-lg btn-outline-success rounded-0" type="button">전송</button>
</div>