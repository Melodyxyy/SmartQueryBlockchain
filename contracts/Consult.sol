//SPDX
pragma solidity ^0.8.15;

contract ConsultionContract{
    // create
    event AddEnquiry(address recipient, uint consultionId)
    // read
    // event ReadTask(address recipient, uint consultionId)
    // update
    // event UpdateTask(address recipient, uint consultionId)
    // delete
    event DeleteEnquiry(uint consultionId, bool isDeleted)

    struct Consult{
        uint id;
        string enquiryText;
        bool isDeleted;
    }

    // Consultation(0, 'clean', false)

    Consultation [] private consultation; 
    // consultation []
    // consultation.push ({})
    mapping(uint256)consultatonToOwner;
    
    function AddEnquiry(string memory consultationText, bool isDeleted)
    external{
        uint consultationId = consultation.length;
        consultation.push(Consult(consultationId, consultationText, isDeleted))
        consultatonToOwner[consultionId] = msg.sender;
        emit AddEnquiry(msg.sender, consultationId)
    }

    //get enquiries that are mine
    function getEnquiry(Enquiry[] memory){
        Enquiry[] memory temporary = new Enquiry[](enquiry.length);
        uint counter = 0;

        for (uiint i = 0; i<enquiry.length; i++){
            if(enquiryToOwner[i]==msg.sender && enquiryToOwner[i].isDeleted==false){
                temporary[counter]=tasks[i];
                counter++;
    }
    // function updateEnquiry(string memory consultationText, bool isDeleted)
} 
Enquiry[]memory result = new Enquiry[](counter);
for (uint i=0; i<counter; i++){
result[i] = temporary[i]
}
return result;
}
function deleteEnquiry(uint enquiryId, bool isDeleted)  external {
    if(enquiryToOwner[enquiryId]== msg.sender){
      enquiry[enquiryId].isDeleted = isDeleted;
      emit DeleteEnquiry(enquiryId, isDeleted);
    }
}
}