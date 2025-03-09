// import Time "mo:base/Time";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Blob "mo:base/Blob";
// import SHA256 "mo:base/SHA256";
// import Text "mo:base/Text";

// actor Veriflux {
//     // Define a certificate type
//     type Certificate = {
//         id: Text;
//         issuer: Principal;
//         recipient: Text;
//         issuedAt: Time.Time;
//         details: Text;
//         hash: Text;
//     };

//     // Store certificates
//     let certificates = HashMap.HashMap<Text, Certificate>(10, Text.equal, Text.hash);
//     let userRoles = HashMap.HashMap<Principal, Text>(10, Principal.equal, Principal.hash);

//     // Function to hash certificate data
//     func generateHash(data: Text) : Text {
//         let bytes = Blob.toArray(Text.encodeUtf8(data));
//         let hashBytes = SHA256.fromArray(bytes);
//         return Text.encodeUtf8(Blob.toText(hashBytes));
//     };

//     // Mint a certificate
//     public shared (caller) func mintCertificate(id: Text, recipient: Text, details: Text) : async Text {
//         let role = userRoles.get(caller);
//         if (role != ?"issuer") return "Access Denied: Only issuers can mint certificates";

//         let certificateData = id # recipient # details;
//         let certificateHash = generateHash(certificateData);

//         let certificate: Certificate = {
//             id = id;
//             issuer = caller;
//             recipient = recipient;
//             issuedAt = Time.now();
//             details = details;
//             hash = certificateHash;
//         };

//         certificates.put(id, certificate);
//         return "Certificate minted successfully with hash: " # certificateHash;
//     };

//     // Verify a certificate
//     public query func verifyCertificate(id: Text) : async ?Certificate {
//         return certificates.get(id);
//     };

//     // Register user as issuer or verifier
//     public shared (caller) func registerUser(role: Text) : async Text {
//         if (role != "issuer" and role != "verifier") return "Invalid role";
//         userRoles.put(caller, role);
//         return "User registered as " # role;
//     };

//     // Check user role
//     public query func getUserRole(user: Principal) : async ?Text {
//         return userRoles.get(user);
//     };
// };










// import Array "mo:base/Array";
// import Time "mo:base/Time";
// import Text "mo:base/Text";
// import Int "mo:base/Int";

// actor CertificateManager {
//     type Certificate = {
//         id: Text;
//         issuer: Text;
//         recipient: Text;
//         course: Text;
//         issueDate: Int;
//     };

    // // Use a stable array to store certificates
    // stable var certificates: [Certificate] = [];

    // // Create a new certificate
    // public func createCertificate(issuer: Text, recipient: Text, course: Text): async Certificate {
    //     // let id = Text.concat(issuer, recipient, course, Int.toText(Time.now()));
    //     let id = Text.concat(issuer, Text.concat(recipient, Text.concat(course, Int.toText(Time.now()))));
    //     let newCertificate: Certificate = {
    //         id;
    //         issuer;
    //         recipient;
    //         course;
    //         issueDate = Time.now();
    //     };
    //     certificates := Array.append(certificates, [newCertificate]);
    //     newCertificate
    // };

    // // Get all certificates
    // public query func getAllCertificates(): async [Certificate] {
    //     certificates
    // };

    // // Get a certificate by ID
    // public query func getCertificate(id: Text): async ?Certificate {
    //     Array.find<Certificate>(certificates, func(cert: Certificate): Bool { cert.id == id })
    // };

//     // Verify a certificate (simplified to just check if it exists)
//     public query func verifyCertificate(id: Text): async Bool {
//         switch (Array.find<Certificate>(certificates, func(cert: Certificate): Bool { cert.id == id })) {
//             case (null) { false };
//             case (?cert) { true };
//         }
//     };
// }





// from elsuraj
// import Array "mo:base/Array";
// import Time "mo:base/Time";
// import Text "mo:base/Text";
// import Int "mo:base/Int";
// import Principal "mo:base/Principal";
// import CertifiedData "mo:base/CertifiedData";
// import HashMap "mo:base/HashMap";
// import Iter "mo:base/Iter";
// import Debug "mo:base/Debug";
// import Blob "mo:base/Blob";
// import Sha256 "mo:sha2/Sha256";


// // Define the actor

// actor CertificateManager {
//     private stable var authorizedIssuers : [Principal] = [Principal.fromText("4sxcy-uffsq-raca2-u5fdh-6u5tg-yz6bl-jgtns-eoctr-u6wen-svor7-xae")];
//     private stable var adminPrincipal : Principal = Principal.fromText("4sxcy-uffsq-raca2-u5fdh-6u5tg-yz6bl-jgtns-eoctr-u6wen-svor7-xae");
//     private var certificatesEntries : [(Text, Certificate)] = [];
//     private var certificates = HashMap.HashMap<Text, Certificate>(10, Text.equal, Text.hash);

//     type Certificate = {
//         issuer : Text;
//         recipient : Text;
//         program : Text;
//         issuedAt : Int;
//         hash : Text;
//         status : Text;
//     };

//     system func preupgrade() {
//         certificatesEntries := Iter.toArray(certificates.entries());
//     };

//     system func postupgrade() {
//         certificates := HashMap.fromIter<Text, Certificate>(certificatesEntries.vals(), 10, Text.equal, Text.hash);
//         certificatesEntries := [];
//     };

//     public shared (msg) func addAuthorizedIssuer(issuer : Principal) : async Text {
//         if (msg.caller != adminPrincipal) {
//             return "Error: Only admin can add authorized issuers";
//         };
//         if (Array.find(authorizedIssuers, func(p : Principal) : Bool { p == issuer }) != null) {
//             return "Error: Issuer already exists";
//         };
//         authorizedIssuers := Array.append(authorizedIssuers, [issuer]);
//         Debug.print("New authorized issuer added: " # Principal.toText(issuer));
//         return "New authorized issuer added successfully";
//     };

//     public shared (msg) func addAdmin(newAdmin : Principal) : async Text {
//         if (msg.caller != adminPrincipal and Array.find(authorizedIssuers, func(p : Principal) : Bool { p == msg.caller }) == null) {
//             return "Error: Only admin or authorized issuers can add new admins";
//         };
//         authorizedIssuers := Array.append(authorizedIssuers, [newAdmin]);
//         Debug.print("New admin added: " # Principal.toText(newAdmin));
//         return "New admin added successfully";
//     };

//     public func createCertificate(issuer: Text, recipient: Text, course: Text): async Certificate {
//     let issuedAt = Time.now();
    
//     let hashInput = issuer # recipient # course # Int.toText(issuedAt);
//     let hashBlob = Text.encodeUtf8(hashInput);
//     let hash = Sha256.fromBlob(#sha256, hashBlob);
//     let hashHex = blobToHex(hash);

//     let cert : Certificate = {
//         issuer = issuer;
//         recipient = recipient;
//         program = course;
//         issuedAt = issuedAt;
//         hash = hashHex;
//         status = "Valid";
//     };

//     certificates.put(hashHex, cert);
//     updateCertifiedData();
    
//     cert
// };

//     public query func listCertificates() : async [Certificate] {
//         return Iter.toArray(certificates.vals()); 

//     };
// }




import Array "mo:base/Array";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import CertifiedData "mo:base/CertifiedData";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Sha256 "mo:sha2/Sha256";
import Nat8 "mo:base/Nat8";
import Error "mo:base/Error";


// Define the actor
actor CertificateManager {
    private stable var authorizedIssuers: [Principal] = [
        Principal.fromText("4sxcy-uffsq-raca2-u5fdh-6u5tg-yz6bl-jgtns-eoctr-u6wen-svor7-xae")
    ];
    private stable var adminPrincipal: Principal = Principal.fromText("4sxcy-uffsq-raca2-u5fdh-6u5tg-yz6bl-jgtns-eoctr-u6wen-svor7-xae");
    
    private var certificatesEntries: [(Text, CertificateOld)] = [];
    private var certificates = HashMap.HashMap<Text, Certificate>(10, Text.equal, Text.hash);

    // Old Certificate Type (used before upgrade)
    type CertificateOld = {
        issuer: Text;
        recipient: Text;
        program: Text;
        issuedAt: Int;
        hash: Text;
    };

    // New Certificate Type (includes status)
    type Certificate = {
        issuer: Text;
        recipient: Text;
        program: Text;
        issuedAt: Int;
        hash: Text;
        status: Text;
    };

    // Preserve old certificates before upgrade
    system func preupgrade() {
        certificatesEntries := Iter.toArray(certificates.entries());
    };

    // Migrate old certificates to the new format after upgrade
    system func postupgrade() {
        let migratedCerts = HashMap.HashMap<Text, Certificate>(10, Text.equal, Text.hash);
        
        for ((key, oldCert) in certificatesEntries.vals()) {
            let newCert: Certificate = {
                issuer = oldCert.issuer;
                recipient = oldCert.recipient;
                program = oldCert.program;
                issuedAt = oldCert.issuedAt;
                hash = oldCert.hash;
                status = "Valid"; // New field added in migration
            };
            migratedCerts.put(key, newCert);
        };
        
        certificates := migratedCerts;
        certificatesEntries := [];
    };

    // Add an authorized issuer (Admin Only)
    public shared (msg) func addAuthorizedIssuer(issuer: Principal): async Text {
        // Input Validation
        if (Principal.isAnonymous(issuer)) {
            throw Error.reject("Error: Invalid issuer principal");
        };

        // check if the caller is the admin
        if (msg.caller != adminPrincipal) {
            return "Error: Only admin can add authorized issuers";
        };

        // check if the issuer already exist
        if (Array.find(authorizedIssuers, func(p: Principal): Bool { p == issuer }) != null) {
            return "Error: Issuer already exists";
        };

        // Add the new issuer
        authorizedIssuers := Array.append(authorizedIssuers, [issuer]);

        //  Log the action
        Debug.print("New authorized issuer added: " # Principal.toText(issuer));
        return "New authorized issuer added successfully";
    };

    // Add a new admin (Admin Only)
    public shared (msg) func addAdmin(newAdmin: Principal): async Text {
        if (msg.caller != adminPrincipal and Array.find(authorizedIssuers, func(p: Principal): Bool { p == msg.caller }) == null) {
            return "Error: Only admin or authorized issuers can add new admins";
        };
        authorizedIssuers := Array.append(authorizedIssuers, [newAdmin]);
        Debug.print("New admin added: " # Principal.toText(newAdmin));
        return "New admin added successfully";
    };

    // Old Function (kept for backward compatibility)
    public func createCertificate(issuer: Text, recipient: Text, course: Text): async CertificateOld {
    let issuedAt = Time.now();
    
    let hashInput = issuer # recipient # course # Int.toText(issuedAt);
    let hashBlob = Text.encodeUtf8(hashInput);
    let hash = Sha256.fromBlob(#sha256, hashBlob);
    let hashHex = blobToHex(hash);

    let certOld: CertificateOld = {
        issuer = issuer;
        recipient = recipient;
        program = course;
        issuedAt = issuedAt;
        hash = hashHex;
    };

    // Store as the new certificate format internally
    let certNew: Certificate = {
        issuer = issuer;
        recipient = recipient;
        program = course;
        issuedAt = issuedAt;
        hash = hashHex;
        status = "Valid"; // New field added
    };

    certificates.put(hashHex, certNew);
    updateCertifiedData();
    
    return certOld;  // Returning old type to prevent breaking frontend
};


    // New Function (Future usage)
    public func issueCertificate(issuer: Text, recipient: Text, program: Text, issuedAt: Int): async Certificate {
        let hashInput = issuer # recipient # program # Int.toText(issuedAt);
        let hashBlob = Text.encodeUtf8(hashInput);
        let hash = Sha256.fromBlob(#sha256, hashBlob);
        let hashHex = blobToHex(hash);

        let cert: Certificate = {
            issuer = issuer;
            recipient = recipient;
            program = program;
            issuedAt = issuedAt;
            hash = hashHex;
            status = "Valid";
        };

        certificates.put(hashHex, cert);
        updateCertifiedData();
        return cert;
    };

    // Convert Blob to Hex String
    private func blobToHex(blob: Blob): Text {
        let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var result = "";
        for (byte in Blob.toArray(blob).vals()) {
            result #= hex[Nat8.toNat(byte) / 16] # hex[Nat8.toNat(byte) % 16];
        };
        result
    };

    // Update Certified Data for Secure Verification
    private func updateCertifiedData() {
        let certifiedData = to_candid(Iter.toArray(certificates.vals()));
        let digest = Sha256.Digest(#sha256);
        digest.writeBlob(certifiedData);
        CertifiedData.set(digest.sum());
    };

    // Verify a certificate by hash
    public query func verifyCertificate(hash: Text): async {
        certificate: ?Certificate;
        certified: Bool;
    } {
        {
            certificate = certificates.get(hash);
            certified = CertifiedData.getCertificate() != null;
        }
    };

    // List all certificates
    public query func listCertificates(): async [Certificate] {
        return Iter.toArray(certificates.vals());
    };
};




