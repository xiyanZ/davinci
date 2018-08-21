/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import {
  LOAD_ORGANIZATIONS,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
  ADD_ORGANIZATION,
  ADD_ORGANIZATION_SUCCESS,
  ADD_ORGANIZATION_FAILURE,
  EDIT_ORGANIZATION,
  EDIT_ORGANIZATION_SUCCESS,
  EDIT_ORGANIZATION_FAILURE,
  DELETE_ORGANIZATION,
  DELETE_ORGANIZATION_SUCCESS,
  DELETE_ORGANIZATION_FAILURE,
  LOAD_ORGANIZATION_DETAIL,
  LOAD_ORGANIZATION_DETAIL_SUCCESS,
  LOAD_ORGANIZATION_DETAIL_FAILURE,
  LOAD_ORGANIZATIONS_MEMBERS,
  LOAD_ORGANIZATIONS_MEMBERS_FAILURE,
  LOAD_ORGANIZATIONS_MEMBERS_SUCCESS,
  LOAD_ORGANIZATIONS_PROJECTS,
  LOAD_ORGANIZATIONS_PROJECTS_FAILURE,
  LOAD_ORGANIZATIONS_PROJECTS_SUCCESS,
  LOAD_ORGANIZATIONS_TEAMS,
  LOAD_ORGANIZATIONS_TEAMS_FAILURE,
  LOAD_ORGANIZATIONS_TEAMS_SUCCESS,
  ADD_TEAM,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAILURE,
  SEARCH_MEMBER,
  SEARCH_MEMBER_SUCCESS,
  SEARCH_MEMBER_FAILURE,
  INVITE_MEMBER,
  INVITE_MEMBER_SUCCESS,
  INVITE_MEMBER_FAILURE,
  CHANGE_MEMBER_ROLE_ORGANIZATION,
  CHANGE_MEMBER_ROLE_ORGANIZATION_ERROR,
  CHANGE_MEMBER_ROLE_ORGANIZATION_SUCCESS,
  DELETE_ORGANIZATION_MEMBER,
  DELETE_ORGANIZATION_MEMBER_ERROR,
  DELETE_ORGANIZATION_MEMBER_SUCCESS
} from './constants'

export function loadOrganizationProjects (param) {
  return {
    type: LOAD_ORGANIZATIONS_PROJECTS,
    payload: {
      param
    }
  }
}

export function organizationsProjectsLoaded (projects) {
  return {
    type: LOAD_ORGANIZATIONS_PROJECTS_SUCCESS,
    payload: {
      projects
    }
  }
}

export function loadOrganizationsProjectsFail () {
  return {
    type: LOAD_ORGANIZATIONS_PROJECTS_FAILURE
  }
}

export function loadOrganizationMembers (id) {
  return {
    type: LOAD_ORGANIZATIONS_MEMBERS,
    payload: {
      id
    }
  }
}


export function organizationsMembersLoaded (members) {
  return {
    type: LOAD_ORGANIZATIONS_MEMBERS_SUCCESS,
    payload: {
      members
    }
  }
}

export function loadOrganizationsMembersFail () {
  return {
    type: LOAD_ORGANIZATIONS_MEMBERS_FAILURE
  }
}

export function loadOrganizationTeams (id) {
  return {
    type: LOAD_ORGANIZATIONS_TEAMS,
    payload: {
      id
    }
  }
}

export function organizationsTeamsLoaded (teams) {
  return {
    type: LOAD_ORGANIZATIONS_TEAMS_SUCCESS,
    payload: {
      teams
    }
  }
}

export function loadOrganizationsTeamsFail () {
  return {
    type: LOAD_ORGANIZATIONS_TEAMS_FAILURE
  }
}

export function loadOrganizations () {
  return {
    type: LOAD_ORGANIZATIONS
  }
}

export function organizationsLoaded (organizations) {
  return {
    type: LOAD_ORGANIZATIONS_SUCCESS,
    payload: {
      organizations
    }
  }
}

export function loadOrganizationsFail () {
  return {
    type: LOAD_ORGANIZATIONS_FAILURE
  }
}

export function addOrganization (organization, resolve) {
  return {
    type: ADD_ORGANIZATION,
    payload: {
      organization,
      resolve
    }
  }
}

export function organizationAdded (result) {
  return {
    type: ADD_ORGANIZATION_SUCCESS,
    payload: {
      result
    }
  }
}

export function addOrganizationFail () {
  return {
    type: ADD_ORGANIZATION_FAILURE
  }
}

export function editOrganization (organization) {
  return {
    type: EDIT_ORGANIZATION,
    payload: {
      organization
    }
  }
}

export function organizationEdited (result) {
  return {
    type: EDIT_ORGANIZATION_SUCCESS,
    payload: {
      result
    }
  }
}

export function editOrganizationFail () {
  return {
    type: EDIT_ORGANIZATION_FAILURE
  }
}

export function deleteOrganization (id, resolve) {
  return {
    type: DELETE_ORGANIZATION,
    payload: {
      id,
      resolve
    }
  }
}

export function organizationDeleted (id) {
  return {
    type: DELETE_ORGANIZATION_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteOrganizationFail () {
  return {
    type: DELETE_ORGANIZATION_FAILURE
  }
}

export function loadOrganizationDetail (id) {
  return {
    type: LOAD_ORGANIZATION_DETAIL,
    payload: {
      id
    }
  }
}

export function organizationDetailLoaded (organization) {
  return {
    type: LOAD_ORGANIZATION_DETAIL_SUCCESS,
    payload: {
      organization
    }
  }
}

export function loadOrganizationDetailFail (organization, widgets) {
  return {
    type: LOAD_ORGANIZATION_DETAIL_FAILURE,
    payload: {
      organization,
      widgets
    }
  }
}

export function addTeam (team, resolve) {
  return {
    type: ADD_TEAM,
    payload: {
      team,
      resolve
    }
  }
}

export function teamAdded (result) {
  return {
    type: ADD_TEAM_SUCCESS,
    payload: {
      result
    }
  }
}

export function addTeamFail () {
  return {
    type: ADD_TEAM_FAILURE
  }
}

export function searchMember (keyword) {
  return {
    type: SEARCH_MEMBER,
    payload: {
      keyword
    }
  }
}

export function memberSearched (result) {
  return {
    type: SEARCH_MEMBER_SUCCESS,
    payload: {
      result
    }
  }
}

export function searchMemberFail () {
  return {
    type: SEARCH_MEMBER_FAILURE
  }
}

export function inviteMember (orgId, memId) {
  return {
    type: INVITE_MEMBER,
    payload: {
      orgId,
      memId
    }
  }
}

export function inviteMemberSuccess (result) {
  return {
    type: INVITE_MEMBER_SUCCESS,
    payload: {
      result
    }
  }
}

export function inviteMemberFail () {
  return {
    type: INVITE_MEMBER_FAILURE
  }
}


export function deleteOrganizationMember (relationId, resolve) {
  return {
    type: DELETE_ORGANIZATION_MEMBER,
    payload: {
      relationId,
      resolve
    }
  }
}

export function organizationMemberDeleted (id) {
  return {
    type: DELETE_ORGANIZATION_MEMBER_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteOrganizationMemberFail () {
  return {
    type: DELETE_ORGANIZATION_MEMBER_ERROR
  }
}

export function changeOrganizationMemberRole (relationId, newRole, resolve) {
  return {
    type: CHANGE_MEMBER_ROLE_ORGANIZATION,
    payload: {
      relationId,
      newRole,
      resolve
    }
  }
}

export function organizationMemberRoleChanged (relationId, newRole) {
  return {
    type: CHANGE_MEMBER_ROLE_ORGANIZATION_SUCCESS,
    payload: {
      relationId,
      newRole
    }
  }
}

export function changeOrganizationMemberRoleFail () {
  return {
    type: CHANGE_MEMBER_ROLE_ORGANIZATION_ERROR
  }
}





