'use strict';

if(document.querySelector('#kals')) fetch('/assets/data/jsonTodo.json')
.then(response=>response.json())
.then(data=>{
    (function(){
        const dataModules = {
            daysName: {
                ko: ['일', '월', '화', '수', '목', '금', '토'],
                en: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
            },
            daysNum: {
                startDate: (y, m) => new Date(y, m - 1).getDay(),
                endDay: (y, m) => new Date(y, m, 0).getDate()
            },
            genDate: (empty, lastDate) => new Array(empty).fill('').concat(...(new Array(lastDate).fill(0).map((x, i) => i + 1))).concat(...(new Array(Math.ceil((lastDate+empty)/7)*7 - (lastDate+empty)).fill(''))),
            todayBtn: () => `<button class="btn btn-danger btn-lg" data-btn="today">today</button>`,
            prevBtn: () => `<button class="btn btn-success btn-lg" data-btn="prev">prev</button>`,
            nextBtn: () => `<button class="btn btn-success btn-lg" data-btn="next">next</button>`,
            yearSelector: () => `<select class="form-select form-select-lg col mx-0">${new Array(101).fill(0).map((x,i)=>`<option value="${i+1999}">${i+1999}</option>`).join('')}</select>`,
            monthSelector: () => `<select class="form-select form-select-lg col mx-0">${new Array(12).fill(0).map((x,i)=>`<option value="${i}">${i+1}</option>`)}</select>`,
        };
    
        const modules = {
            kalendar: (y, m, lang = 'ko') => `<table id="kal">
                <thead>
                <tr>
                    <th colspan="7">
                        <span class="btn-bundle justify-content-center">
                            ${dataModules.prevBtn()}
                            ${dataModules.yearSelector()}
                            ${dataModules.monthSelector()}
                            ${dataModules.nextBtn()}
                        </span>
                    </th>
                </tr>
                <tr>${dataModules.daysName[lang].map(d=>`<th>${d}</th>`).join('')}</tr>
                </thead>
                <tbody>${dataModules.genDate(dataModules.daysNum.startDate(y, m), dataModules.daysNum.endDay(y, m)).map((x,i)=>i==0?`<tr><td>${x==''?x:`<span>${x}</span>`}</td>`:i%7==0?`</tr><tr><td>${x==''?x:`<span>${x}</span>`}</td>`:`<td>${x==''?x:`<span>${x}</span>`}</td>`).join('')}</tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">${dataModules.todayBtn()}</td>
                    </tr>
                </tfoot>
            </table>`,
            list: {
                render: ({todo, tag,time})=>{
                    tag = (()=>{
                        if(tag != undefined){
                            tag = tag.replace(/(\s)/gi,"");
                        }
                        switch(tag){
                            case undefined:
                                return '▷';
                            case "":
                                return '▷';
                            case 'rest':
                                return '☕';
                            case 'study':
                                return '📖';
                            case 'alert':
                                return '📢';
                            case '1':
                                return '🥇';
                            case '2':
                                return '🥈';
                            case '3':
                                return '🥉';
                            case 'edit':
                                return '🔧';
                            case 'idea':
                                return '💡';
                            case 'know':
                                return '❗';
                            case 'how':
                                return '❓';
                            case 'check':
                                return '✅';
                            case 'cancel':
                                return '❎';
                            case 'prj':
                                return '<i class="fas fa-sitemap text-warning"></i>';
                        }
                    })();

                    return `
                    <li class="py-1">
                        <div class="w-flex justify-content-between">
                            <span${tag.match(/✅|❎|☕/gm)?' class="check-item"':''}>
                                <span>${todo}</span>
                                <span>${tag}</span>
                            </span>
                            <span class="time">${time}</span>
                        </div>
                    </li>`
                }
            },
            render: (target, html) => target.insertAdjacentHTML('beforeend', html),
        };
    
        function Controller() {
            let models = null;
    
            this.init = function (model) {
                models = model;
    
                models.renderTable();
                window.addEventListener('click', this.renderToday);
                window.addEventListener('click', this.monthControl);
                window.addEventListener('change', this.selectControl);
                window.addEventListener('click', this.markSelectDate);
                window.addEventListener('resize', this.flexMark);
            }
    
            this.flexMark = function(ev){
                models.flexMark(ev);
            }
    
            this.markSelectDate = function(ev){
                const target = ev.target;
                if(target.tagName != 'TD' || !target.querySelector('span')) return;
                
                models.markSelectDate(target);
            }
    
            this.renderToday = function(ev){
                const target = ev.target;
                if(target.tagName != 'BUTTON' || target.dataset.btn != 'today') return;
    
                models.renderTable();
                models.markNow();
            }
    
            this.selectControl = function(ev){
                const target = ev.target;
                if(target.tagName != 'SELECT') return;
    
                models.selectControl(target);
            }
    
            this.monthControl = function(ev){
                const target = ev.target;
                const btnType = target.dataset.btn;
    
                if(target.tagName != 'BUTTON') return;
                if(target.dataset.btn == 'today') return;
    
                models.monthControl(btnType);
            }
        }
    
        function Model() {
            const current = new Date();
            let views = null;
            let _year = current.getFullYear();
            let _month = current.getMonth();
    
            this.init = function (view) {
                views = view;
            }
    
            this.dateSynchronization = function(year, month){
                _year = year;
                _month = month;
            }
    
            this.renderTable = function(year=current.getFullYear(), month=current.getMonth()){
                this.dateSynchronization(year, month);
                views.renderTable(year, month);
            }
    
            this.markSelectDate = function(date){
                views.markSelectDate(date);
                views.renderListInSelectDate(date);
            }
    
            this.selectControl = function(select){
                const value = parseInt(select.value);
                if(value<12){
                    // month
                    this.renderTable(_year, value);
                } else {
                    // year
                    this.renderTable(value, _month);
                }
            }
    
            this.monthControl = function(type){
                if(type == 'prev'){
                    this.prevMonth(type);
                } else if(type == 'next'){
                    this.nextMonth(type);
                }
                this.renderTable(_year, _month);
            }
    
            this.prevMonth = function(){
                if(_month==0){
                    _month = 11;
                    _year--;
                } else {
                    _month--;
                }
            }
    
            this.nextMonth = function(){
                if(_month==11){
                    _month = 0;
                    _year++;
                } else {
                    _month++;
                }
            }
    
            this.markNow = function(){
                views.markNow(current.getFullYear(), current.getMonth());
            }
    
            this.flexMark = function(ev){
                views.flexMark(ev);
            }
        }
    
        function View() {
            const selectorSyntax = (num)=>`table#kal>thead>tr>th>span>select:nth-child(${num})`;
            let options;
            let components = null;
            let selectY = null;
            let selectM = null;
            let selectedDate = null;
            let renderTarget = null;
            let listWrap = null;
    
            this.init = function (component, option) {
                options = option;
                let count = 0;
                Object.keys(data)
                .forEach(_y=>Object.keys(data[_y])
                    .forEach(_m=>Object.keys(data[_y][_m])
                        .forEach(_d=>data[_y][_m][_d]
                            .forEach(({tag})=>tag.match(/check/gm)?count++:null)
                        )
                    )
                );

                components = component;
                renderTarget = document.querySelector('#kals');
    
                renderTarget.insertAdjacentHTML('beforeend', `<div id="totalCount" class="text-end" style="margin-top: 32px; margin-bottom: 10px;"><span class="tag tag-info">${count}개 완료</span></div><span id="kalWrap"></span>`);
                renderTarget = document.querySelector('#kalWrap');
            }
    
            this.renderTable = function(year, month){
                const parts = components.modules;
    
                this.clearTarget();
                parts.render(renderTarget, parts.kalendar(year, month+1, options.lang));
                this.markToday(year, month);
                this.dateSynchronization(year, month);
                this.clearListView(listWrap);
            }
    
            this.dateSynchronization = function(year, month){
                this.markHasData(year, month);
                selectY = document.querySelector(selectorSyntax(2));
                selectM = document.querySelector(selectorSyntax(3));
                if(selectY) selectY.value = year;
                if(selectM) selectM.value = month;
            }
    
            this.markHasData = function(year, month){
                const dataList = data[year]?data[year][month]:null;
                const base = new Date();
                if(dataList){
                    [...document.querySelectorAll('tbody td:not(:empty)')].forEach(tag=>{
                        let dateHasList = dataList[tag.textContent];
                        let counting = dateHasList&&dateHasList.filter(({tag})=>tag.match(/check|rest|cancel/gim)).length;
                        let isBefore;

                        base.getTime()>=new Date(`${year}-${month+1}-${tag.textContent}`).getTime()
                        ?isBefore = true
                        :isBefore = false;

                        if(Object.keys(dataList).includes(tag.textContent)){
                            tag.querySelector('span').insertAdjacentHTML('beforeend', `<span class="badge ${counting>dateHasList.length/2
                            && isBefore
                                ?'text-success'
                                :counting<=dateHasList.length/2
                            && isBefore
                                ?'text-warning'
                                :''}">+${dateHasList.length}</span>`);
                        }
                    });
                }
            }
    
            this.markToday = function(year, month){
                const now = new Date();
                if(year == now.getFullYear() && month == now.getMonth()){
                    const date = [...document.querySelectorAll('tbody td:not(:empty)')].filter(day=>day.textContent == now.getDate())[0];
                    date.id = 'now';
                }
            }
    
            this.markNow = function(year, month){
                const now = document.querySelector('tbody td:not(:empty)#now');
                this.markSelectDate(now);
                this.renderListInSelectDate(now);
            }
    
            this.markSelectDate = function(date){
                const parent = document.querySelector('#kalWrap>#kal');
                let mark = document.querySelector('#mark');
                selectedDate = date;
                if(mark){
                    this.markStyleSetting(mark, parent);
                } else {
                    if(!mark){
                        mark = document.createElement('div');
                        mark.id = 'mark';
                    }
                    if(mark && parent) this.markStyleSetting(mark, parent);
                    document.querySelector('#kalWrap').append(mark);
                }
            }
    
            this.flexMark = function(ev){
                const mark = document.querySelector('#mark');
                const parent = document.querySelector('#kalWrap>#kal');
    
                if(mark && parent) this.markStyleSetting(mark, parent);
            }
    
            this.markStyleSetting = function(mark, parent){
                const markWidth = 3;
                mark.style.cssText = `
                    position: absolute;
                    top: ${selectedDate.offsetTop}px;
                    left: ${selectedDate.offsetLeft}px;
                    width: ${selectedDate.offsetWidth-0.5}px;
                    height: ${selectedDate.offsetHeight}px;
                    border-bottom: ${markWidth}px solid coral;
                `;
            }
    
            this.renderListInSelectDate = function(date){
                const dateValue = date.innerText.split('\n')[0];
                this.initListWrap(dateValue);
            }
    
            this.initListWrap = function(date){
                this.clearListView(listWrap);
                listWrap = document.createElement('div');
                listWrap.classList.add('data-wrap');
                listWrap.innerHTML = `
                    <div>
                        <span class="year">${selectY.value}.</span>
                        <span class="month">${parseInt(selectM.value)+1}.</span>
                        <span class="date text-info">${date}</span>
                    </div>
                    <ol class="data-list list-group">
                        ${data[selectY.value][selectM.value]&&data[selectY.value][selectM.value][date]?data[selectY.value][selectM.value][date].map(item=>modules.list.render(item)).join(''):`<li>등록된 일정이 없어요.</li>`}
                    </ol>
                `;
                renderTarget.append(listWrap);
            }
    
            this.clearListView = function(wrap){
                if(wrap) wrap.remove();
            }
    
            this.clearTarget = function(){
                if(document.querySelector('#kal'))document.querySelector('#kal').remove();
            }
        }
    
        return {
            init: function (options) {
                const innerStyle = document.createElement('style');
                innerStyle.innerHTML = `
                    #kalWrap{
                        width: 100%;
                        position: relative;;*/
                    }

                    .check-item{
                        text-decoration-line: line-through;
                    }

                    .data-wrap {
                        font-size: 90%;
                        user-select: none;
                    }

                    ol.data-list{
                        list-style: revert;
                    }

                    .data-list .time{
                        font-size: 80%;
                        color: gray;
                    }

                    #mark{
                        transition: top 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55), left 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
                        box-shadow: 0 0 0.5em 0 coral;
                        border-radius: 0.5em;
                    }

                    table#kal{
                        border-collapse: collapse;
                        text-align: center;
                        font-size: 80%;
                        user-select: none;
                        width: 100%;
                        margin-bottom: 32px;
                    }

                    .data-wrap .date{
                        font-size: 200%;
                        font-weight: bold;
                    }

                    table#kal>*>*>td{
                        width: 50px;
                        height: 50px !important;
                    }

                    table#kal th[colspan="7"]{
                        padding-bottom: 1em;
                    }

                    table#kal>thead>tr>th{
                        text-transform: capitalize;
                    }

                    table#kal>thead>tr:last-child{
                        border-bottom: 2px solid rgba(0,0,0,0.5);
                    }
    
                    table#kal>thead>tr:last-child>th{
                        height: 30px;
                    }
    
                    table#kal>tbody>tr{
                        border-bottom: 1px solid rgba(0,0,0,0.2);
                    }

                    table#kal>tbody>tr:last-child{
                        border-bottom: none
                    }

                    table#kal>*>tr>*:nth-child(1),
                    table#kal>*>tr>*:nth-child(7){
                        font-weight: bold;
                    }
    
                    table#kal>*>tr>*:nth-child(1){
                        color: rgb(229 32 68);
                    }
    
                    table#kal>*>tr>*:nth-child(7){
                        color: rgb(32 84 229);
                    }
    
                    table#kal>tfoot>tr>td{
                        padding: .3rem;
                    }
    
                    table#kal>tfoot>tr>td>button{
                        width: 100%;
                    }
    
                    table#kal>*>*>td:empty{
                        pointer-events: none;
                    }
    
                    table#kal>*>*>td:hover:not(:empty){
                        box-shadow: inset 0 0 0 9999px rgba(0,0,0,0.05);
                    }
    
                    table#kal>tbody>*>td:not(:empty){
                        padding: 0.5rem;
                    }
    
                    table#kal>tbody>*>td>span{
                        position: relative;
                        height: 100%;
                        width: 100%;
                        justify-content: center;
                        display: inline-flex;
                        align-items: center;
                        pointer-events: none;
                    }
    
                    table#kal>tbody>*>td>span>span{
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        color: red;
                        font-size: 70%;
                    }

                    table#kal select{
                        font-size: 110%;
                    }

                    table#kal>*>*>td:not(:empty){
                        transition: box-shadow 150ms;
                        cursor: pointer;
                    }

                    #now {
                        font-weight: bold;
                        color: rgb(52 183 141);
                        /*background-color: rgba(52 183 141 / 20%);*/
                    }
                `.split('\n').map(x=>x.trimStart()).join('\n');
                document.head.append(innerStyle);
                const components = {
                    dataModules,
                    modules
                };
    
                const view = new View();
                const model = new Model();
                const controller = new Controller();
    
                view.init(components, options);
                model.init(view);
                controller.init(model);
            }
        }
    })().init({
        lang: 'en',
    });
})