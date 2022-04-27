import './Table.css'
import React from 'react';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.info = [
            {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
            {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
            {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
            {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
            {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
            {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
            {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
            {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
            {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
            {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
            {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
        ];
        
        this.state = {
            names: [],
            btts: [],
            nav: []
        };
    }
    
    componentDidMount() {
        this.Update();
    }

    Update() {
        this.setState({
                names: this.table_info(),
                btts: this.table_btts(),
                nav: this.table_nav()
            }
        );
    }

    table_info() {
        let names = []
        
        let last = Math.min(this.info.length, this.page*5)
        for(let i = Math.max(0,this.page*5-5); i < last; i++) {
            names.push(
                <tr>
                    <td class="a">{this.info[i].first_name + ' ' + this.info[i].last_name}</td>
                    <td class="b">{this.info[i].email}</td>
                    <td class="c">{this.info[i].created_at}</td>
                </tr>
            );
            
        }
        return names;
    }

    deleteEl(idx) {
        return () => {
            this.info.splice(idx, 1);
            this.Update();
        }
    }


    table_btts() {
        let btts = []
        let last = Math.min(this.info.length, this.page*5)
        for(let i = Math.max(0,this.page*5-5); i < last; i++) {
            btts.push(
                <tr>
                    <td class="editar">editar</td>
                    <td onClick={this.deleteEl(i)} class="excluir">excluir</td>
                </tr>
            );
        }
        return btts;
    }

    buttonEl(pg, name) {
        let onC = () => {
            this.page = pg;
            this.Update();
        };
        if(pg === this.page) {
            onC = () => {};
        }
        return (
            <div onClick={onC} class="button">
                <div class="button_text">{name}</div>
            </div>  
        );
    }
    
    
    table_nav() {
        let last = this.info.length
        let nav = [this.buttonEl(this.page-1,"<<")];
        for(let i = 0, pg = 1; i < last; i+=5, pg++) {
            nav.push(this.buttonEl(pg, `${pg}`));
        }
        nav.push(this.buttonEl(this.page+1,">>"));
        return nav;
    }

    render() {
        //this.Update();
        return (
            <>
                <div class="full_table">
                    <div class="table_head_div">
                        <div class="table_head_names">
                            <div class="table_head_name">Nome</div>
                            <div class="table_head_name">Email</div>
                            <div class="table_head_name">Cadastrado em</div>
                        </div>
                    </div>
                    <div class="table_info_div">
                        <table id="table_info" class="table_info">
                            {this.state.names}
                        </table>
                        <table id="table_buttons" class="table_buttons">
                            {this.state.btts}
                        </table>    
                    </div>
                </div>
                <div id="button_line" class="button_line">
                    {this.state.nav}
                </div>
            </>
        );
    }
}