<template>
    <header>
        <v-navigation-drawer class="height-app white--text" v-model="drawer" fixed app width="220" style="background-color : #123B4B">
            <v-list class="pt-13 pb-0 text-center" :to="myprofile">
                <v-list-item class="" :to="'/user/profile/'+ user._id" >
                    <v-avatar class="ml-2" color="" size="130" >
                        <v-img aspect-ratio="2" :src="user.hasOwnProperty('image_url') && user.image_url != '' ? user.image_url :'https://nathanhroperations.s3.amazonaws.com/profile_pics/Sahiba_T/avatar-7.png'" alt="John" />
                    </v-avatar>
                </v-list-item>
                <v-list-item class="py-0 pl-2 text-left" :to="'/user/profile/'+ user._id">
                    <v-list-item-title class="title white--text pt-4">{{user.first_name}} {{user.last_name}}</v-list-item-title>
                </v-list-item>
                <v-list-item class="py-0 pl-2 text-left" :to="'/user/profile/'+ user._id">
                    <v-list-item-title class="caption white--text">{{user.personal.designation}}</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-divider class="white mx-2"></v-divider>
            <v-list class="pt-0 caption white--text">
                <v-list-item to="/user/tasks">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">My Work</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/dashboards/my-team" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' || isFinanceMgrRole === 'true' || isManagerRole === 'true'">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">My Team</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-group :value="false" v-if="appsFlag" id="PayrollDropDownIcon">
                    <template v-slot:activator class="grey">
                        <v-list-item-title class="white--text" style="font-size : 16px">Apps</v-list-item-title>
                    </template>
                    <v-list-item @click="adqRoute" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('ADQ')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;ADQ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="crmRoute" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('CRM')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;CRM</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/client/configuration" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('Client Config')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Client Config</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="wilhelmsenRoute" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('Wilhelmsen')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Wilhelmsen</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="staffingRoute" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('Staffing')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Staffing</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/asset-management" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('Assets')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Assets</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item to='/pro' v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('PRO')">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">PRO</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/dashboards/myhr" v-if="!user.emp_id.includes('IT')">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">HR Self Service</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- <v-list-group :value="false" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' || isFinanceMgrRole === 'true'" id="PayrollDropDownIcon">
                    <template v-slot:activator class="grey">
                        <v-list-item-title class="white--text" style="font-size : 16px">Payroll Central</v-list-item-title>
                    </template>
                    <v-list-item to="/payroll" v-if="employeeRole !== 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/approval" v-if="isHRMgrRole === 'true' || isAdminRole === 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Approvals</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/recursive" v-if="employeeRole !== 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Recurring</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/payslips" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' ">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Payslips</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/eos" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' || isFinanceMgrRole === 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;End Of Service</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>-->
                <v-list-item to="/performance-central" v-if="user.hasOwnProperty('accessTag') && user.accessTag.includes('Performance')">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">Performance Central</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group :value="false" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' || isFinanceMgrRole === 'true'" id ='reportsDropDownIcon'>
                    <template v-slot:activator class="grey">
                        <v-list-item-title class="white--text" style="font-size : 16px">Reports</v-list-item-title>
                    </template>
                    <v-list-item to="/reports/hr" v-if="isHRMgrRole === 'true' || isAdminRole === 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;HR Reports</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- <v-list-item to="/reports/finance" v-if="isFinanceMgrRole === 'true' || isAdminRole === 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Gratuity Reports</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->
                    <!-- <v-list-item to="/dashboards/nhr-clients" v-if="isAdminRole === 'true'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Clients Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->
                </v-list-group>
                <v-list-group :value="false" v-if="isHRMgrRole === 'true' || isAdminRole === 'true' || isFinanceMgrRole === 'true' || user.accessTag.includes('Admin Central')" id='organizationDropDownIcon'>
                    <template v-slot:activator class="grey">
                        <v-list-item-title class="white--text" style="font-size : 16px">Organization</v-list-item-title>
                    </template>
                    <v-list-item to="/admin-central" v-if="isAdminRole !== 'false' || user.accessTag.includes('Admin Central')">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Admin Central</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/users" v-if="isAdminRole !== 'false' || isHRAdminRole !== 'false' ">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Employees</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- <v-list-item to="/performance" v-if="isAdminRole !== 'false' || isHRAdminRole !== 'false' ">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Performance</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->
                    <v-list-item to="/configuration" v-if="isAdminRole !== 'false'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Configurations</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/resources" v-if="isAdminRole !== 'false'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Resources</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/incident" v-if="isAdminRole !== 'false'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Support Requests</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- <v-list-item to="/pro" v-if="isAdminRole !== 'false'">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" style="font-size : 16px">&emsp;Onboarding</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->
                </v-list-group>
                <v-list-item to="/rewards">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">Rewards</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/user/support">
                    <v-list-item-content>
                        <v-list-item-title class="white--text" style="font-size : 16px">Support</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        <!-- <v-btn fab dark small class="mr-n4" color="black" fixed left bottom @click.stop="drawer = !drawer">
            <v-icon>mdi-arrow-right</v-icon>
        </v-btn> -->

        <v-app-bar :clipped-left="clipped" fixed app color="white" :dark="true" flat>
            <v-app-bar-nav-icon class="blue-grey--text" @click.stop="drawer = !drawer"/>

            <v-btn @click.prevent="home" text class="blue-grey--text text--darken-2 font-weight-bold">
                Nathan & Nathan
            </v-btn>
            <v-spacer />
            <v-tooltip bottom color="white blue-grey--text">
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon large class="" to="/directory" v-bind="attrs" v-on="on">
                    <v-icon size="21" class="blue-grey--text mt-n1">mdi-phone-classic</v-icon>
                </v-btn>
                </template>
            Directory
            </v-tooltip>
            <Bell/>
            <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon large class="mr-2" v-bind="attrs" v-on="on">
                            <v-icon :class="attendanceAlert()">mdi-clock</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <Attendance />
                    </v-card>
                </v-menu>
            </div>
            <v-menu bottom rounded offset-y>
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="white" v-bind="attrs" v-on="on">
                    <v-avatar class="ml-2" color="" size="40">
                        <v-img aspect-ratio="2" :src="user.hasOwnProperty('image_url') && user.image_url != '' ? user.image_url :'https://nathanhroperations.s3.amazonaws.com/profile_pics/Sahiba_T/avatar-7.png'" alt="John"/>
                    </v-avatar>
                </v-btn>
                </template>
                <v-list class="py-0">
                    <v-list-item  @click="myprofile">
                        <v-list-item-title depressed color="primary"><v-icon class="primary--text">mdi-account-outline</v-icon>&nbsp; &nbsp;My Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item  to="/user/socials">
                        <v-list-item-title depressed color="primary"><v-icon class="primary--text">mdi-google-earth</v-icon>&nbsp; &nbsp;Social Wall</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click.prevent="logout">
                        <v-list-item-title depressed color="primary" ><v-icon class="primary--text">mdi-logout</v-icon>&nbsp; &nbsp;Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>
        <Bot />

        <!-- Chats-->
        <v-navigation-drawer v-model="drawer_chat" temporary right app width="800" style="height:100%">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Chats</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn icon dark @click="drawer_chat = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card class="grey lighten-4" flat style="height:100%">
                <Chat />
            </v-card>
        </v-navigation-drawer>

    </header>
</template>

<script>
import moment from 'moment'
import Bell from '~/components/Bell'
import Bot from '~/components/reuseable/bot'
import Attendance from '~/components/reuseable/attendance'
// import Chat from '~/components/reuseable/chats'

export default {
    // components:{Bell,Bot,Attendance,Chat},
    components:{Bell,Bot,Attendance},
    data () {
        return {
            users:[],
            drawer_chat:false,
            openChatDialog: false,
            emailBadgeMessage: 1,
            clipped: false,
            drawer: true,
            fixed: false,
            items: [
            {
                icon: 'mdi-apps',
                title: 'Dashboard',
                to: '/visa-outsourcing'
            },
            {
                icon: 'mdi-account-plus',
                title: 'Visa Outsourcing',
                to: '/visa-outsourcing'
            }
            ],
            miniVariant: true,
            right: true,
            rightDrawer: false,
            title: 'Visa Outsourcing',
            company: 'NathanHR',
            user:{
                emp_id:'',
                personal:{},
                bank:{},
                education:{},
                work_experience:{},
                documents:{},
                emergency:{},
                reporting:{},
                leaves:{},
                salary:{},
                accessTag:[]
            },
            isAdminRole: false,
            isHRAdminRole: false,
            isHRMgrRole: false,
            employeeRole: false,
            isFinanceMgrRole: false,
            isManagerRole:false,
            logs:{},
            myWork:true,
            myHR:true,
            managerCentral:true,
            tr_dev: true,
            reports:true,
        }
    },

    mounted() {
        this.getUserInfo(),
        this.getRole()
    },
    methods: {
        getRole() {
            this.isHRMgrRole = this.$store.getters.isHRMgr
            this.isFinanceMgrRole = this.$store.getters.isFinanceMgr
            this.isManagerRole = this.$store.getters.isManager
            this.isHRAdminRole = this.$store.getters.isHR
            this.isAdminRole = this.$store.getters.isAdmin
            this.employeeRole = this.$store.getters.isEmployee
            this.users = this.$store.getters.getUsers
        },
        getUserInfo() {
            this.user = this.$store.getters.getUser
        },
        logout() {
            this.$store.dispatch('logout')
            .then( () =>  this.$router.push("/"))
        },
        home(){
            this.$router.push("/user/dashboard3")
        },
        payrollRoute(){
            window.open('https://payrolldemo.nathanhr.ae/', '_blank')
        },
        adqRoute(){
            window.open('https://adq.nathanhr.ae/', '_blank')
        },
        crmRoute(){
            window.open('https://crm.nathanhr.com/', '_blank')
        },
        staffingRoute(){
            window.open('https://staffing-admin.nathanhr.com/login', '_blank')
        },
        // proRoute
        wilhelmsenRoute(){
            window.open('https://wilhelmsen.nathanhr.ae/', '_blank')
        },
        myprofile(){
            this.$router.push("/user/profile")
        },
        attendanceAlert(){
            var d = new Date();
            var time = d.getHours();
            let abc = time > 17 ? 'pink--text' :'blue-grey--text'
            return abc
        }
    },
    computed: {
        firstNameInitial() {
            return this.user.first_name.substr(0,1)
        },
        appsFlag(){
            let abc = this.user.hasOwnProperty('accessTag') && this.user.accessTag.length > 0 ? true : false
            return abc
        }
    }
}
</script>

<style scoped>

.avatar {
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    display: flex;
    background: #1565c0 !important;
    color: #fff;
    width: 80px;
    height: 80px;
    font-size: 2rem;
}
#rounded-card {
  border-radius: 50%;
  min-height: 100px;
  min-width: 120px;
  padding: 15px;
  /* border: 1px solid blue; */
}

.grad1 {
    background-color: #1976D2; /* For browsers that do not support gradients */
    background-image: linear-gradient(to bottom,#06477b, #6ea4ce);
}

.height-app {
    height: 100% !important;
}

</style>
<style lang="scss">
#teamCentralDropDownIcon,#PayrollDropDownIcon,#reportsDropDownIcon,#organizationDropDownIcon{
.theme--light.v-icon{
    color: white;
}
}
</style>
