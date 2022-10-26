<template>
  <div class="custom-head">
    <v-navigation-drawer
      style="background-color: #fff !important"
      color="#000099"
      class="navigationDrawer height-app black--text borderright-0"
      v-model="drawer"
      fixed
      flat
      app
      width="240"
    >
      <div
        style="height: 100% !important"
        class="d-flex flex-column justify-space-between"
      >
        <div>

          <!-- LOGO + Drawer Button -->
          <v-row class="mt-5 mx-0" style="width: 100% !important">
            <v-col cols="9" class="mx-auto pa-0 mt-1">
              <v-img
                src="/header/nathan-digital-text.svg"
                width="170"
                contain
                style="width: 150px !important"
              ></v-img>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col
              cols="1"
              class="pa-0 ml-3"
              @click="drawer = false"
              style="cursor: pointer !important"
            >
              <v-img
                src="/header/arrow_left.svg"
                width="250"
                height="20"
              ></v-img>
            </v-col>
          </v-row>

          <!-- te -->
          <v-list class="pt-7 ml-3 pb-0 text-center">
            <v-row class="mx-0" style="width: 100% !important">
              <v-col cols="4" class="py-0" align-self="center">
                <v-list-item class="pl-0">
                    <v-avatar
                      class=""
                      size="55"
                    >
                      <v-img
                        aspect-ratio="1"
                        src="/header/profile-pic.png"
                        alt="profile-pic"
                      ></v-img>
                    </v-avatar>
                </v-list-item>
              </v-col>
              <v-col cols="8" class="py-0 px-1">
                <v-list-item-content class="pt-0 text-left pb-0">
                  <v-list-item-title
                    class="title font-weight-bold darkBlue-heading-text"
                    style="line-height: 1.5rem !important"
                    >{{ user.first_name }}</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-content class="pt-0 text-left pb-0">
                  <v-list-item-title
                    class="title font-weight-bold darkBlue-heading-text"
                    style="line-height: 1.5rem !important"
                    >{{ user.last_name }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 pt-1" style="width: 90% !important">
              <v-col
                cols="5"
                class="pa-0"
                style="text-align: -webkit-center !important"
              >
              <v-img width="55" height="20"  src="/header/profile-icon.svg"></v-img>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="7" class="pa-0 text-center">
                <v-list-item-title
                  class="text-left darkBlue-heading-text"
                  style="
                    font-weight: 300 !important;
                    font-size: 16px !important;
                    white-space: break-spaces !important;
                    color: #8C9CAC !important;
                    padding: 0 I !important;
                    margin: 0 !important;
                  "
                  v-if="user.personal"
                  >{{ user.personal.designation }}</v-list-item-title
                >
              </v-col>
            </v-row>
          </v-list>



          <v-divider
            style="border-color: transparent !important"
            class="mx-2 mt-13"
          ></v-divider>

          <!-- GENERAL -->
          <h4
            class="ml-5"
            style="color: #8c9cac !important; font-weight: 500 !important"
          >
            General
          </h4>
          <v-list
            class="pt-0 darkBlue-heading-text ml-5"
            active-class="red--text"
          >
            <v-list-item to="/dashboard" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/dashboard.svg"
                    class="mywork_custom"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Dashboard</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item to="/sales" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/hrselfservice.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Sales</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/expencess" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/payrollcentral.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Expencess</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/reports" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/payrollcentral.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Reports</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/chart-of-accounts" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/teamcentral.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Chart of Accounts</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/admin-central" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/reports.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Admin Central</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider
            style="border-color: transparent !important"
            class="mx-2 mt-5"
          ></v-divider>

          <!-- TOOLS -->
          <h4
            class="ml-5"
            style="color: #8c9cac !important; font-weight: 500 !important"
          >
            Tools
          </h4>
          <v-list class="pt-0 darkBlue-heading-text ml-5">
            <v-list-item to="/user/support" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/support.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Support</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-list-item to="/configuration" class="navigationHover">
              <v-list-item-content>
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/settings.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">Settings</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->

            <v-list-item class="navigationHover">
              <v-list-item-content class="">
                <v-list-item-title
                  class="darkBlue-heading-text d-flex justify-start"
                >
                  <v-img
                    src="/header/myprofile.svg"
                    max-width="fit-content"
                    height="20"
                    contain
                  ></v-img>
                  <p class="mb-0 ml-2">My Profile</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider
            style="border-color: transparent !important"
            class="mx-2 mt-5"
          ></v-divider>
        </div>
        <v-row
          class="pt-0 darkBlue-heading-text ml-5 mb-5"
          style="max-height: 40px !important"
        >
          <v-col cols="12" class="pa-0">
            <p class="mb-0">Powered by</p>
            <div>
              <img src="/header/nathan-digital.png" alt="nathan digital logo" style="width: 70px !important"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>
  </div>
</template>
  
<script>
import '@/assets/scss/SideBar/_sidebar.scss'
export default {
  data() {
    return {
      chatNotification: 0,
      attendance_dialog: true,
      currentPage: '',
      users: '',
      drawer_chat: false,
      openChatDialog: false,
      emailBadgeMessage: 1,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/visa-outsourcing',
        },
        {
          icon: 'mdi-account-plus',
          title: 'Visa Outsourcing',
          to: '/visa-outsourcing',
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Visa Outsourcing',
      company: 'NathanHR',
      user: {
        first_name: 'Akshaf',
        last_name: 'Mulla',
        
        emp_id: '',
        personal: {
          designation: '@akshaf_88',
        },
        bank: {},
        education: {},
        work_experience: {},
        documents: {},
        emergency: {},
        reporting: {},
        leaves: {},
        salary: {},
        emp_id: '',
        accessTag: [],
      },
      isAdminRole: false,
      isHRAdminRole: false,
      isHRMgrRole: false,
      employeeRole: false,
      isFinanceMgrRole: false,
      isManagerRole: false,
      logs: {},
      items: [{ name: '', icon: '' }],
      myWork: true,
      myHR: true,
      managerCentral: true,
      tr_dev: true,
      reports: true,
      todayWfh: false,
      prevScrollpos: '',
    }
  },
  methods: {
    getImage(val) {
      // let image = 'https://nathanhroperations.s3.amazonaws.com/profile_pics/Sahiba_T/avatar-7.png'
      let image = 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/users/Akshaf-Mulla/Akshaf-Mulla.webp'
      if (val != undefined) {
        if (val.hasOwnProperty('image_url')) {
          if (val.image_url != '') image = val.image_url
        }
      }
      return image
    },
  },
}
</script>
  
