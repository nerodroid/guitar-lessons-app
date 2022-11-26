import React from "react";
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Featured Content',
        dataIndex: 'featuredContent',
    },
    {
        title: 'Author',
        dataIndex: 'author',
        render: (row) => (
            <p>{row.username}</p>
        ),
    },
    {
        title: 'Created Date',
        dataIndex: 'createdDate',
    },
    {
        title: 'View Count',
        dataIndex: 'viewCount',
    },
];

const data = [
    {
        "_id": "62dd601aea410133cbe3e856",
        "title": "President raises unofficial concerns with Colombo based diplomats over statements",
        "featuredContent": "Diplomats were briefed by the President on the military operations conducted to clear the protestors from the Presidential Secretariat area, but the diplomats were requested to check with the authorities as well to clarify matters when making statements in the future...",
        "fullContent": "KiotIERpcGxvbWF0cyB3ZXJlIGJyaWVmZWQgYnkgdGhlIFByZXNpZGVudCBvbiB0aGUgbWlsaXRhcnkgb3BlcmF0aW9ucyBjb25kdWN0ZWQgdG8gY2xlYXIgdGhlIHByb3Rlc3RvcnMgZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUgcmVxdWVzdGVkIHRvIGNoZWNrIHdpdGggdGhlIGF1dGhvcml0aWVzIGFzIHdlbGwgdG8gY2xhcmlmeSBtYXR0ZXJzIHdoZW4gbWFraW5nIHN0YXRlbWVudHMgaW4gdGhlIGZ1dHVyZSoqCgoqKi0gUHJlc2lkZW50IFdpY2tyZW1lc2luZ2hlIGluIGEgbGlnaHQgdG9uZSBhc2tlZCBzb21lIG9mIHRoZSBkaXBsb21hdHMgaWYgcHJvdGVzdG9ycyBjb3VsZCBpbGxlZ2FsbHkgb2NjdXB5IHRoZSBQcmVzaWRlbnQncyBPZmZpY2UgaW4gdGhlaXIgcmVzcGVjdGl2ZSBjb3VudHJpZXMqKgoKLSAqKkhlIGluZm9ybWVkIHRoZW0gdGhhdCB0aGUgcHJvdGVzdG9ycyBoYWQgYmVlbiBpbmZvcm1lZCB0byB2YWNhdGUgdGhlIGFyZWEgYnkgNiBhbSB5ZXN0ZXJkYXkgYnV0IHRoZSBwcm90ZXN0b3JzIGhhZCByZWZ1c2VkIGFuZCBpbnN0ZWFkIHByb3ZpZGVkIGFuIGFsdGVybmF0aXZlIHRpbWUgd2hpY2ggd2FzIG5vdCBhY2NlcHRlZCBieSB0aGUgYXV0aG9yaXRpZXMqKgoKKipCeSBKQU1JTEEgSFVTQUlOKioKCj4gVGhlIERhaWx5IE1pcnJvciBsZWFybnMgdGhhdCB0aGUgZGlwbG9tYXRzIHdlcmUgYnJpZWZlZCBieSB0aGUKPiBQcmVzaWRlbnQgb24gdGhlIG1pbGl0YXJ5IG9wZXJhdGlvbnMgY29uZHVjdGVkIHRvIGNsZWFyIHRoZSBwcm90ZXN0b3JzCj4gZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUKPiByZXF1ZXN0ZWQgdG8gY2hlY2sgd2l0aCB0aGUgYXV0aG9yaXRpZXMgYXMgd2VsbCB0byBjbGFyaWZ5IG1hdHRlcnMKPiB3aGVuIG1ha2luZyBzdGF0ZW1lbnRzIGluIHRoZSBmdXR1cmUuCgpQcmVzaWRlbnQgUmFuaWwgV2lja3JlbWVzaW5naGUgeWVzdGVyZGF5IGV2ZW5pbmcgaW52aXRlZCB0aGUgQ29sb21ibyBiYXNlZCBkaXBsb21hdHMgdG8gdGhlIFByZXNpZGVudCdzIE9mZmljZSBkdXJpbmcgd2hpY2ggdW5vZmZpY2lhbCBjb25jZXJucyB3ZXJlIHJhaXNlZCBvdmVyIHRoZWlyIHN0YXRlbWVudHMgcmVsZWFzZWQgb3ZlciB0aGUgb3BlcmF0aW9uIGNhcnJpZWQgb3V0IGJ5IHRoZSBzZWN1cml0eSBmb3JjZXMgdG8gY2xlYXIgdGhlIFByZXNpZGVudGlhbCBTZWNyZXRhcmlhdCBhcmVhLg==",
        "thumbnail": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "author": {
            "username": "shamalka4",
            "firstName": "Shamalka",
            "lastName": "Navod",
            "email": "shamalka@gmail.com",
            "userType": "admin"
        },
        "createdDate": "1658675226833",
        "viewCount": 0,
        "__v": 0
    },
    {
        "_id": "62dd60d0ea410133cbe3e85a",
        "title": "President raises unofficial concerns with Colombo based diplomats over statements",
        "featuredContent": "Diplomats were briefed by the President on the military operations conducted to clear the protestors from the Presidential Secretariat area, but the diplomats were requested to check with the authorities as well to clarify matters when making statements in the future...",
        "fullContent": "KiotIERpcGxvbWF0cyB3ZXJlIGJyaWVmZWQgYnkgdGhlIFByZXNpZGVudCBvbiB0aGUgbWlsaXRhcnkgb3BlcmF0aW9ucyBjb25kdWN0ZWQgdG8gY2xlYXIgdGhlIHByb3Rlc3RvcnMgZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUgcmVxdWVzdGVkIHRvIGNoZWNrIHdpdGggdGhlIGF1dGhvcml0aWVzIGFzIHdlbGwgdG8gY2xhcmlmeSBtYXR0ZXJzIHdoZW4gbWFraW5nIHN0YXRlbWVudHMgaW4gdGhlIGZ1dHVyZSoqCgoqKi0gUHJlc2lkZW50IFdpY2tyZW1lc2luZ2hlIGluIGEgbGlnaHQgdG9uZSBhc2tlZCBzb21lIG9mIHRoZSBkaXBsb21hdHMgaWYgcHJvdGVzdG9ycyBjb3VsZCBpbGxlZ2FsbHkgb2NjdXB5IHRoZSBQcmVzaWRlbnQncyBPZmZpY2UgaW4gdGhlaXIgcmVzcGVjdGl2ZSBjb3VudHJpZXMqKgoKLSAqKkhlIGluZm9ybWVkIHRoZW0gdGhhdCB0aGUgcHJvdGVzdG9ycyBoYWQgYmVlbiBpbmZvcm1lZCB0byB2YWNhdGUgdGhlIGFyZWEgYnkgNiBhbSB5ZXN0ZXJkYXkgYnV0IHRoZSBwcm90ZXN0b3JzIGhhZCByZWZ1c2VkIGFuZCBpbnN0ZWFkIHByb3ZpZGVkIGFuIGFsdGVybmF0aXZlIHRpbWUgd2hpY2ggd2FzIG5vdCBhY2NlcHRlZCBieSB0aGUgYXV0aG9yaXRpZXMqKgoKKipCeSBKQU1JTEEgSFVTQUlOKioKCj4gVGhlIERhaWx5IE1pcnJvciBsZWFybnMgdGhhdCB0aGUgZGlwbG9tYXRzIHdlcmUgYnJpZWZlZCBieSB0aGUKPiBQcmVzaWRlbnQgb24gdGhlIG1pbGl0YXJ5IG9wZXJhdGlvbnMgY29uZHVjdGVkIHRvIGNsZWFyIHRoZSBwcm90ZXN0b3JzCj4gZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUKPiByZXF1ZXN0ZWQgdG8gY2hlY2sgd2l0aCB0aGUgYXV0aG9yaXRpZXMgYXMgd2VsbCB0byBjbGFyaWZ5IG1hdHRlcnMKPiB3aGVuIG1ha2luZyBzdGF0ZW1lbnRzIGluIHRoZSBmdXR1cmUuCgpQcmVzaWRlbnQgUmFuaWwgV2lja3JlbWVzaW5naGUgeWVzdGVyZGF5IGV2ZW5pbmcgaW52aXRlZCB0aGUgQ29sb21ibyBiYXNlZCBkaXBsb21hdHMgdG8gdGhlIFByZXNpZGVudCdzIE9mZmljZSBkdXJpbmcgd2hpY2ggdW5vZmZpY2lhbCBjb25jZXJucyB3ZXJlIHJhaXNlZCBvdmVyIHRoZWlyIHN0YXRlbWVudHMgcmVsZWFzZWQgb3ZlciB0aGUgb3BlcmF0aW9uIGNhcnJpZWQgb3V0IGJ5IHRoZSBzZWN1cml0eSBmb3JjZXMgdG8gY2xlYXIgdGhlIFByZXNpZGVudGlhbCBTZWNyZXRhcmlhdCBhcmVhLg==",
        "thumbnail": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "author": {
            "username": "shamalka4",
            "firstName": "Shamalka",
            "lastName": "Navod",
            "email": "shamalka@gmail.com",
            "userType": "admin"
        },
        "createdDate": "1658675408727",
        "viewCount": 0,
        "__v": 0
    },
    {
        "_id": "62dd6307ea410133cbe3e862",
        "title": "President raises unofficial concerns with Colombo based diplomats over statements",
        "featuredContent": "Diplomats were briefed by the President on the military operations conducted to clear the protestors from the Presidential Secretariat area, but the diplomats were requested to check with the authorities as well to clarify matters when making statements in the future...",
        "fullContent": "KiotIERpcGxvbWF0cyB3ZXJlIGJyaWVmZWQgYnkgdGhlIFByZXNpZGVudCBvbiB0aGUgbWlsaXRhcnkgb3BlcmF0aW9ucyBjb25kdWN0ZWQgdG8gY2xlYXIgdGhlIHByb3Rlc3RvcnMgZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUgcmVxdWVzdGVkIHRvIGNoZWNrIHdpdGggdGhlIGF1dGhvcml0aWVzIGFzIHdlbGwgdG8gY2xhcmlmeSBtYXR0ZXJzIHdoZW4gbWFraW5nIHN0YXRlbWVudHMgaW4gdGhlIGZ1dHVyZSoqCgoqKi0gUHJlc2lkZW50IFdpY2tyZW1lc2luZ2hlIGluIGEgbGlnaHQgdG9uZSBhc2tlZCBzb21lIG9mIHRoZSBkaXBsb21hdHMgaWYgcHJvdGVzdG9ycyBjb3VsZCBpbGxlZ2FsbHkgb2NjdXB5IHRoZSBQcmVzaWRlbnQncyBPZmZpY2UgaW4gdGhlaXIgcmVzcGVjdGl2ZSBjb3VudHJpZXMqKgoKLSAqKkhlIGluZm9ybWVkIHRoZW0gdGhhdCB0aGUgcHJvdGVzdG9ycyBoYWQgYmVlbiBpbmZvcm1lZCB0byB2YWNhdGUgdGhlIGFyZWEgYnkgNiBhbSB5ZXN0ZXJkYXkgYnV0IHRoZSBwcm90ZXN0b3JzIGhhZCByZWZ1c2VkIGFuZCBpbnN0ZWFkIHByb3ZpZGVkIGFuIGFsdGVybmF0aXZlIHRpbWUgd2hpY2ggd2FzIG5vdCBhY2NlcHRlZCBieSB0aGUgYXV0aG9yaXRpZXMqKgoKKipCeSBKQU1JTEEgSFVTQUlOKioKCj4gVGhlIERhaWx5IE1pcnJvciBsZWFybnMgdGhhdCB0aGUgZGlwbG9tYXRzIHdlcmUgYnJpZWZlZCBieSB0aGUKPiBQcmVzaWRlbnQgb24gdGhlIG1pbGl0YXJ5IG9wZXJhdGlvbnMgY29uZHVjdGVkIHRvIGNsZWFyIHRoZSBwcm90ZXN0b3JzCj4gZnJvbSB0aGUgUHJlc2lkZW50aWFsIFNlY3JldGFyaWF0IGFyZWEsIGJ1dCB0aGUgZGlwbG9tYXRzIHdlcmUKPiByZXF1ZXN0ZWQgdG8gY2hlY2sgd2l0aCB0aGUgYXV0aG9yaXRpZXMgYXMgd2VsbCB0byBjbGFyaWZ5IG1hdHRlcnMKPiB3aGVuIG1ha2luZyBzdGF0ZW1lbnRzIGluIHRoZSBmdXR1cmUuCgpQcmVzaWRlbnQgUmFuaWwgV2lja3JlbWVzaW5naGUgeWVzdGVyZGF5IGV2ZW5pbmcgaW52aXRlZCB0aGUgQ29sb21ibyBiYXNlZCBkaXBsb21hdHMgdG8gdGhlIFByZXNpZGVudCdzIE9mZmljZSBkdXJpbmcgd2hpY2ggdW5vZmZpY2lhbCBjb25jZXJucyB3ZXJlIHJhaXNlZCBvdmVyIHRoZWlyIHN0YXRlbWVudHMgcmVsZWFzZWQgb3ZlciB0aGUgb3BlcmF0aW9uIGNhcnJpZWQgb3V0IGJ5IHRoZSBzZWN1cml0eSBmb3JjZXMgdG8gY2xlYXIgdGhlIFByZXNpZGVudGlhbCBTZWNyZXRhcmlhdCBhcmVhLg==",
        "thumbnail": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "author": {
            "username": "shamalka4",
            "firstName": "Shamalka",
            "lastName": "Navod",
            "email": "shamalka@gmail.com",
            "userType": "admin"
        },
        "createdDate": "1658675975407",
        "viewCount": 0,
        "__v": 0
    }
]

const NewsTable = () => {
    return (
        <div className="m-3">
            <Table 
                dataSource={data} 
                columns={columns} 
                rowKey={"_id"}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {console.log(record)}, // click row
                    };
                }}
            />
        </div>
    );
};

export default NewsTable;
