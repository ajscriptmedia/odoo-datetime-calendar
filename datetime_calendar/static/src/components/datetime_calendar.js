/* @odoo-module */

import { DateField } from "@web/views/fields/date/date_field"
import { DateTimeField } from "@web/views/fields/datetime/datetime_field"
import { patch } from "@web/core/utils/patch"
const { DateTime } = luxon
const { useState } = owl

patch(DateField.prototype, 'datetime_calendar', {
    setup() {
        this._super()

        this.calendar = useState({
            'hebrew': this.setCalendar(this.props.value, "hebrew"),
            'islamic': this.setCalendar(this.props.value, "islamic"),
        })
    },
    onDateTimeChanged(date) {
        this._super(date)
        this.calendar.islamic = this.setCalendar(date, "islamic")
    },
    get formattedValue() {
        return this.isDateTime
            ? this.setCalendar(this.props.value, "islamic", DateTime.DATETIME_MED)
            : this.setCalendar(this.props.value, "islamic");
    },
    setCalendar(date, calendar, format=DateTime.DATE_FULL){
        return date && date.reconfigure({ outputCalendar: calendar }).toLocaleString(format)
    }
})

patch(DateTimeField.prototype, 'datetime_calendar', {
    setup() {
        this._super()

        this.calendar = useState({
            'hebrew': this.setCalendar(this.props.value, "hebrew"),
            'islamic': this.setCalendar(this.props.value, "islamic"),
        })
    },
    onDateTimeChanged(date) {
        this._super(date)
        this.calendar.islamic = this.setCalendar(date, "islamic")
    },
    get formattedValue() {
        return this.setCalendar(this.props.value, "islamic")
    },
    setCalendar(date, calendar){
        return date && date.reconfigure({ outputCalendar: calendar }).toLocaleString(DateTime.DATETIME_MED)
    }
})