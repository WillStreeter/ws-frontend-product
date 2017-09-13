"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_DATA = {
    'newUser_1_Attempt': {
        'id': '123newUser1',
        'username': 'peterpiper',
        'firstname': 'peter',
        'lastname': 'piper',
        'password': 'password',
        'email': 'pp@basic.com'
    },
    'regUser_1_Service': {
        'username': 'peterpiper',
        'password': 'password',
        'firstname': 'peter',
        'lastname': 'piper',
        'email': 'pp@basic.com'
    },
    'regUser_1_HttpService': {
        'username': 'peterpiper',
        'password': 'password',
        'firstname': 'peter',
        'lastname': 'piper',
        'email': 'pp@basic.com'
    },
    'regUser_1_Service_ResOptions': {
        'account': {
            'user': {
                'username': 'peterpiper',
                'firstname': 'peter',
                'lastname': 'piper',
                'password': 'password',
                'email': 'pp@basic.com'
            },
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }
    },
    'regUser_1_Service_Result': {
        'type': '[ProfileActions] user registration successful',
        'payload': {
            'user': {
                'username': 'peterpiper',
                'firstname': 'peter',
                'lastname': 'piper',
                'password': 'password',
                'email': 'pp@basic.com'
            },
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }
    },
    'newUser_1_Result': {
        'id': '123newUser1',
        'username': 'peterpiper',
        'firstname': 'peter',
        'lastname': 'piper',
        'email': 'pp@basic.com',
        'token': '123peterpiperpicked'
    },
    'checkUser_1_Attempt': {
        'username': 'peterpiper'
    },
    'currentUser_1_setup': {
        'user': {
            'id': '123newUser1',
            'username': 'peterpiper',
            'firstname': 'peter',
            'lastname': 'piper',
            'email': 'pp@basic.com',
            'token': '123peterpiperpicked'
        },
    },
    'checkUser_2_Attempt': {
        'username': 'docilepeter'
    },
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNhLFFBQUEsU0FBUyxHQUFHO0lBRXBCLG1CQUFtQixFQUFDO1FBQ2YsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFFSixtQkFBbUIsRUFBQztRQUNmLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0osdUJBQXVCLEVBQUM7UUFDbkIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDSiw4QkFBOEIsRUFBQztRQUM1QixTQUFTLEVBQUM7WUFDTCxNQUFNLEVBQUM7Z0JBQ0wsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE9BQU8sRUFBRSxjQUFjO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFLHNDQUFzQztTQUNuRDtLQUNIO0lBRUQsMEJBQTBCLEVBQUM7UUFDeEIsTUFBTSxFQUFFLCtDQUErQztRQUN2RCxTQUFTLEVBQUM7WUFDTixNQUFNLEVBQUM7Z0JBQ0EsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE9BQU8sRUFBRSxjQUFjO2FBQ3hCO1lBQ0wsT0FBTyxFQUFFLHNDQUFzQztTQUNuRDtLQUVIO0lBRUQsa0JBQWtCLEVBQUM7UUFDZCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUUsWUFBWTtRQUN4QixXQUFXLEVBQUUsT0FBTztRQUNwQixVQUFVLEVBQUUsT0FBTztRQUNuQixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUscUJBQXFCO0tBQy9CO0lBRUoscUJBQXFCLEVBQUM7UUFDakIsVUFBVSxFQUFFLFlBQVk7S0FDekI7SUFHSixxQkFBcUIsRUFBQztRQUNqQixNQUFNLEVBQUM7WUFDRixJQUFJLEVBQUUsYUFBYTtZQUNuQixVQUFVLEVBQUUsWUFBWTtZQUN4QixXQUFXLEVBQUUsT0FBTztZQUNwQixVQUFVLEVBQUUsT0FBTztZQUNuQixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUUscUJBQXFCO1NBQ2xDO0tBQ0w7SUFDRCxxQkFBcUIsRUFBQztRQUNqQixVQUFVLEVBQUUsYUFBYTtLQUMxQjtDQUNSLENBQUMiLCJmaWxlIjoidGVzdC5kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgVEVTVF9EQVRBID0ge1xuXG4gICAgICduZXdVc2VyXzFfQXR0ZW1wdCc6e1xuICAgICAgICAgICdpZCc6ICcxMjNuZXdVc2VyMScsXG4gICAgICAgICAgJ3VzZXJuYW1lJzogJ3BldGVycGlwZXInLFxuICAgICAgICAgICdmaXJzdG5hbWUnOiAncGV0ZXInLFxuICAgICAgICAgICdsYXN0bmFtZSc6ICdwaXBlcicsXG4gICAgICAgICAgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAnZW1haWwnOiAncHBAYmFzaWMuY29tJ1xuICAgICAgICB9LFxuXG4gICAgICdyZWdVc2VyXzFfU2VydmljZSc6e1xuICAgICAgICAgICd1c2VybmFtZSc6ICdwZXRlcnBpcGVyJyxcbiAgICAgICAgICAncGFzc3dvcmQnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICdmaXJzdG5hbWUnOiAncGV0ZXInLFxuICAgICAgICAgICdsYXN0bmFtZSc6ICdwaXBlcicsXG4gICAgICAgICAgJ2VtYWlsJzogJ3BwQGJhc2ljLmNvbSdcbiAgICAgICAgfSxcbiAgICAgJ3JlZ1VzZXJfMV9IdHRwU2VydmljZSc6e1xuICAgICAgICAgICd1c2VybmFtZSc6ICdwZXRlcnBpcGVyJyxcbiAgICAgICAgICAncGFzc3dvcmQnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICdmaXJzdG5hbWUnOiAncGV0ZXInLFxuICAgICAgICAgICdsYXN0bmFtZSc6ICdwaXBlcicsXG4gICAgICAgICAgJ2VtYWlsJzogJ3BwQGJhc2ljLmNvbSdcbiAgICAgICAgfSxcbiAgICAgJ3JlZ1VzZXJfMV9TZXJ2aWNlX1Jlc09wdGlvbnMnOntcbiAgICAgICAgJ2FjY291bnQnOntcbiAgICAgICAgICAgICAndXNlcic6e1xuICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ3BldGVycGlwZXInLFxuICAgICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6ICdwZXRlcicsXG4gICAgICAgICAgICAgICAnbGFzdG5hbWUnOiAncGlwZXInLFxuICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICdlbWFpbCc6ICdwcEBiYXNpYy5jb20nXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAndG9rZW4nOiAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5J1xuICAgICAgICB9XG4gICAgIH0sXG5cbiAgICAgJ3JlZ1VzZXJfMV9TZXJ2aWNlX1Jlc3VsdCc6e1xuICAgICAgICAndHlwZSc6ICdbUHJvZmlsZUFjdGlvbnNdIHVzZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnLFxuICAgICAgICAncGF5bG9hZCc6e1xuICAgICAgICAgICAgJ3VzZXInOntcbiAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAncGV0ZXJwaXBlcicsXG4gICAgICAgICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6ICdwZXRlcicsXG4gICAgICAgICAgICAgICAgICAgJ2xhc3RuYW1lJzogJ3BpcGVyJyxcbiAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICdlbWFpbCc6ICdwcEBiYXNpYy5jb20nXG4gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgJ3Rva2VuJzogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOSdcbiAgICAgICAgfVxuXG4gICAgIH0sXG5cbiAgICAgJ25ld1VzZXJfMV9SZXN1bHQnOntcbiAgICAgICAgICAnaWQnOiAnMTIzbmV3VXNlcjEnLFxuICAgICAgICAgICd1c2VybmFtZSc6ICdwZXRlcnBpcGVyJyxcbiAgICAgICAgICAnZmlyc3RuYW1lJzogJ3BldGVyJyxcbiAgICAgICAgICAnbGFzdG5hbWUnOiAncGlwZXInLFxuICAgICAgICAgICdlbWFpbCc6ICdwcEBiYXNpYy5jb20nLFxuICAgICAgICAgICd0b2tlbic6ICcxMjNwZXRlcnBpcGVycGlja2VkJ1xuICAgICAgICB9LFxuXG4gICAgICdjaGVja1VzZXJfMV9BdHRlbXB0Jzp7XG4gICAgICAgICAgJ3VzZXJuYW1lJzogJ3BldGVycGlwZXInXG4gICAgICAgIH0sXG5cblxuICAgICAnY3VycmVudFVzZXJfMV9zZXR1cCc6e1xuICAgICAgICAgICd1c2VyJzp7XG4gICAgICAgICAgICAgICAnaWQnOiAnMTIzbmV3VXNlcjEnLFxuICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ3BldGVycGlwZXInLFxuICAgICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6ICdwZXRlcicsXG4gICAgICAgICAgICAgICAnbGFzdG5hbWUnOiAncGlwZXInLFxuICAgICAgICAgICAgICAgJ2VtYWlsJzogJ3BwQGJhc2ljLmNvbScsXG4gICAgICAgICAgICAgICAndG9rZW4nOiAnMTIzcGV0ZXJwaXBlcnBpY2tlZCdcbiAgICAgICAgICB9LFxuICAgICB9LFxuICAgICAnY2hlY2tVc2VyXzJfQXR0ZW1wdCc6e1xuICAgICAgICAgICd1c2VybmFtZSc6ICdkb2NpbGVwZXRlcidcbiAgICAgICAgfSxcbn07XG5cblxuXG4iXX0=
