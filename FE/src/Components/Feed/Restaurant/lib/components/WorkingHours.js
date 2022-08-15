import React from 'react'

function WorkingHours({workingHours}) {
  return (
    <>
      <div>monday: {workingHours.monday}</div>
      <div>tuesday: {workingHours.tuesday}</div>
      <div>thursday: {workingHours.thursday}</div>
      <div>wednesday: {workingHours.wednesday}</div>
      <div>friday: {workingHours.friday}</div>
      <div>saturday: {workingHours.saturday}</div>
      <div>sunday: {workingHours.sunday}</div>
    </>
  )
}

export default WorkingHours