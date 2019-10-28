exports.snsPayloadLoggerHandler = async (event, context) => {
    event.Records.forEach(({ Sns }) => {
        console.log('updated');
        console.log(JSON.stringify(Sns));
    });
};
