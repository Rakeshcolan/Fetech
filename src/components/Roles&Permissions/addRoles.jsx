import React from 'react'
import CommonTextFields from '../common/Field/CommonTextFIelds'

const addRoles = () => {
  return (
    <div>
        <h4>Add Role</h4>
        <div>
            <CommonTextFields label="RoleName" id="RoleName" />
        </div>
    </div>
  )
}

export default addRoles