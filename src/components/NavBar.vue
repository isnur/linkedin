<template>
  <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    <div class="container d-flex-column">
      <div class="d-flex d-flex-row justify-content-start justify-content-lg-start w-md-100 align-items-center">
        <a class="navbar-brand" href="/" aria-label="Bootstrap">
          <div class="icon">
            <svg height="64" viewBox="0 0 32 32" width="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width=".424533" transform="matrix(1.2327382 0 0 1.2327382 -44.651454 13.534524)"><path d="m60.258392-10.978809h-22.121116c-1.057086 0-1.915916.838027-1.915916 1.87049v22.214515c0 1.033737.85883 1.872613 1.915916 1.872613h22.121116c1.05879 0 1.92144-.838876 1.92144-1.872613v-22.214515c.00042-1.032463-.86223-1.87049-1.92144-1.87049z" fill="#0177b5"/><g fill="#fff"><path d="m40.070173-1.247249h3.85051v12.387859h-3.85051zm1.926104-6.157845c1.23072 0 2.230918 1.000199 2.230918 2.231768 0 1.232418-1.000198 2.232616-2.230918 2.232616-1.234116 0-2.233042-1.000198-2.233042-2.232616 0-1.231569.998926-2.231768 2.233042-2.231768"/><path d="m46.335424-1.247249h3.692584v1.692611h.05137c.514109-.973878 1.769874-2.000822 3.642914-2.000822 3.89891 0 4.61849 2.565875 4.61849 5.901002v6.794644h-3.84754v-6.024117c0-1.436618-.0263-3.284608-2.00082-3.284608-2.00337 0-2.310731 1.564827-2.310731 3.180598v6.128127h-3.84669v-12.387435z"/></g></g></svg>
          </div>
        </a>
        <div class="input-group nav-search"
          @click="handleFocus()"
          @focusout="handleFocusOut()"
        >
          <div class="input-group-prepend" v-if="!activeSearch">
            <div class="icon search">
              <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,19.67l-5.44-5.44a7,7,0,1,0-1.33,1.33L19.67,21ZM10,15.13A5.13,5.13,0,1,1,15.13,10,5.13,5.13,0,0,1,10,15.13Z" class="large-icon" style="fill: currentColor"></path></svg>
            </div>
            <span>Search</span>
          </div>
          <div class="active-search" v-if="activeSearch">
            <input type="text" class="form-control" ref="search" aria-describedby="inputGroupPrepend" required>
            <div class="input-group-append">
              <div class="icon search">
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,19.67l-5.44-5.44a7,7,0,1,0-1.33,1.33L19.67,21ZM10,15.13A5.13,5.13,0,1,1,15.13,10,5.13,5.13,0,0,1,10,15.13Z" class="large-icon" style="fill: currentColor"></path></svg>
              </div>
            </div>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
            <div class="result-search">test</div>
          </div>
        </div>
      </div>
      <ul class="navbar-nav flex-row ml-md-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-item nav-link">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" class="active-item" style="fill-opacity: 1"></path><path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" class="inactive-item" style="fill: currentColor"></path></svg>
            <span class="title d-none d-lg-block">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link">
            <span class="badge">1</span>
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" class="active-item" style="fill-opacity: 1"></path><path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" class="inactive-item" style="fill: currentColor"></path></svg>
            <span class="title d-none d-lg-block">My Network</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z" class="active-item" style="fill-opacity: 1"></path><path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" class="inactive-item" style="fill: currentColor"></path></svg>
            <span class="title d-none d-lg-block">Jobs</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z" class="active-item" style="fill-opacity: 1"></path><path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" class="inactive-item" style="fill: currentColor"></path></svg>
            <span class="title d-none d-lg-block">Messaging</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link">
            <span class="badge">4</span>
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" class="active-item" style="fill-opacity: 1"></path><path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" class="inactive-item" style="fill: currentColor"></path></svg>
            <span class="title d-none d-lg-block">Notifications</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-item nav-link mr-md-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../assets/isnur.jpg" class="profile-member-photo" alt="Isnur Muhammad Suryo Margono" height="24" width="24">
            <span class="dropdown-toggle title d-none d-lg-block">Me</span>
          </router-link>
        </li>
        <li class="nav-item nav-side">
          <a class="nav-item nav-link mr-md-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z" class="large-icon" style="fill: currentColor"></path></svg>
            <span class="dropdown-toggle title d-none d-lg-block">Work</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link">
            <span class="title premium">Reactivate Premium</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  data() {
    return {
      activeSearch: false
    }
  },
  methods: {
    handleFocus() {
      console.log(this.activeSearch);
      this.activeSearch = true;
      setTimeout(() => {
        this.$refs.search.focus();
      }, 20);
    },
    handleFocusOut() {
      console.log(this.activeSearch);
      this.activeSearch = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  padding: 0;
  background: #283e4a;
  border-top: none;
  box-shadow: none;
  height: 52px;
}
.icon {
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  img, svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }
  &.search {
    background-color: #e1e9ee;
    color: #0084bf;
    width: 40px;
    img, svg {
      width: 24px;
      height: 24px;
    }
  }
}
.bug-34dp {
  display: block;
}
.form-control {
  height: 34px;
  background-color: #e1e9ee;
  font-size: 1.4rem;
  width: 100%;
  border: none;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  padding: 0 8px;
  line-height: 1;
  color: #283e4a;
  font-weight: 400;
  &:focus {
    box-shadow: none;
  }
}
.active-search {
  display: flex;
  width: 100%;
}
.result-search {
  color: black;
  position: absolute;
  top: 38px;
  width: 780px;
  height: 681px;
  background-color: white;
  z-index: 1;
  display: flex;
  padding: 10px 15px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.input-group-prepend {
  width: 100%;
  background-color: #e1e9ee;
  border-radius: 2px;
  color: rgb(40, 62, 74);
  span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    height: 100%;
    width: 100%;
  }
  .icon {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    width: 31px;
    &.search {
      img, svg {
        width: 16px;
        height: 16px;
        margin-right: 3px;
        color: rgb(40, 62, 74);
      }
    }
  }
}
.input-group-append {
  .icon {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    cursor: pointer;
  }
}
.navbar-dark .navbar-nav .nav-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 100px;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.33333;
  color: #c7d1d8;
  font-weight: 400;
  transition: color .3s;
  margin-top: 1.5px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0.5px;
    border-bottom: 2px solid #fff;
    transform: scaleX(0);
    transition: transform .2s ease-in-out;
  }
  &:hover {
    color: #ffffff;
  }
  &.router-link-exact-active {
    color: transparent;
    &:focus {
      color: transparent;
    }
    .title {
      color: #ffffff;
    }
    .active-item {
      fill: #ffffff;
      visibility: visible;
    }
    &:after {
      transform: scaleX(1);
    }
  }
}
.navbar-brand {
  margin-right: 12px;
}
.nav-search {
  min-width: 100px;
  width: 280px;
  cursor: text;
  height: 34px;
}
.nav-side {
  border-left: 1px solid #5c6f7c;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 5.5px;
  vertical-align: 0.255em;
  margin-bottom: -1px;
  content: "";
  border-top: 4.12px solid;
  border-right: 4.12px solid transparent;
  border-bottom: 0;
  border-left: 4.12px solid transparent;
}
.badge {
  position: absolute;
  min-width: 14px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 0 4px;
  top: 1px;
  left: 50%;
  height: 18px;
  line-height: 14px;
  background-color: #d11124;
  color: #ffffff;
  border: 2px solid #283e4a;
  border-radius: 14px;
  z-index: 1;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  min-width: 80px;
}
a {
  color: #ffffff;
}
.active-item {
  visibility: hidden;
}
.inactive-item {
  fill: currentColor;
}
.profile-member-photo {
  border-radius: 50%;
  border: 1px solid #c7d1d8;
}
.premium {
  font-size: 1.2rem;
  line-height: 1.33333;
  max-width: 125px;
  color: #dccea4;
  font-weight: 400;
  margin-top: -2.5px;
}

@include media-breakpoint-down(lg) {
  li {
    min-width: 44px;
  }
  .nav-search {
    max-width: 240px;
  }
  .navbar-nav {
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
  .container {
    flex-direction: column;
  }
  .nav-search {
    max-width: 100%;
  }
  .navbar {
    height: 100%;
  }
}
</style>
